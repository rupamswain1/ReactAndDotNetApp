import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import agent from '../../../app/api/agent';
import { Activity } from '../../../app/model/Activity';
interface Props {
  editActivityId: string;
  cancelEdit: any;
  createActivityMode: boolean;
}
const ActivityForm = ({ cancelEdit, editActivityId }: Props) => {
  const [activity, setActivity] = useState<Activity>({
    id: '',
    title: '',
    category: '',
    description: '',
    date: '',
    city: '',
    venue: '',
  });
  useEffect(() => {
    editActivityId &&
      agent.Activities.details(editActivityId).then((res) => setActivity(res));
  }, [editActivityId]);

  const handleChange = (e: any) => {
    setActivity((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(e.target.name, e.target.value);
  };
  return (
    <Segment clearing>
      <Form>
        <Form.Input
          placeholder="Title"
          name="title"
          value={activity.title}
          onChange={(e) => handleChange(e)}
        />
        <Form.TextArea
          placeholder="Description"
          name="description"
          value={activity.description}
        />
        <Form.Input placeholder="Category" value={activity.category} />
        <Form.Input
          placeholder="Date"
          type="date"
          name="date"
          value={activity.date.split('T')[0]}
        />
        <Form.Input placeholder="City" name="city" value={activity.city} />
        <Form.Input placeholder="Venue" name="venue" value={activity.venue} />
        <Button floated="right" positive type="submit" content="Submit" />
        <Button
          floated="right"
          type="button"
          content="Cancel"
          onClick={cancelEdit}
        />
      </Form>
    </Segment>
  );
};

export default ActivityForm;
