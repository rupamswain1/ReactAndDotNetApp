import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Card, Icon, Image } from 'semantic-ui-react';
import agent from '../../../app/api/agent';
import { Activity } from '../../../app/model/Activity';
interface Props {
  activityId: string;
  editMode: any;
  onCancel: any;
}
const ActivityDetails = ({ activityId, editMode, onCancel }: Props) => {
  const [activity, setActivity] = useState<Activity | null>(null);
  useEffect(() => {
    agent.Activities.details(activityId).then((res) => setActivity(res));
    // axios
    //   .get(`http://localhost:5000/api/Activities/${activityId}`)
    //   .then((res) => setActivity(res.data));
  }, [activityId]);

  const handleCancel = () => {
    setActivity(null), onCancel();
  };
  return (
    <>
      {activity && (
        <Card fluid>
          <Image src="https://source.unsplash.com/featured/300x201" />
          <Card.Content>
            <Card.Header>{activity.title}</Card.Header>
            <Card.Meta>
              <span className="date">{activity.date}</span>
            </Card.Meta>
            <Card.Description>{activity.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button.Group widths="2">
              <Button
                basic
                color="blue"
                content="Edit"
                onClick={() => editMode(activity.id)}
              />
              <Button
                basic
                color="grey"
                content="Cancel"
                onClick={handleCancel}
              />
            </Button.Group>
          </Card.Content>
        </Card>
      )}
    </>
  );
};

export default ActivityDetails;
