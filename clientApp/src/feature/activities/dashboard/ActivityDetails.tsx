import { useEffect } from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import { useStore } from '../../../app/store/store';
import { observer } from 'mobx-react-lite';
import { NavLink, useParams } from 'react-router-dom';
const ActivityDetails = () => {
  const {
    activityStore: {
      cancelActivityView,
      setEditMode,
      selectedActivity,
      selectActivity,
      activityViewMode,
    },
  } = useStore();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      selectActivity(id);
    }
  }, [id]);

  return (
    <>
      {selectedActivity && activityViewMode && (
        <Card fluid>
          <Image src="https://source.unsplash.com/featured/300x201" />
          <Card.Content>
            <Card.Header>{selectedActivity.title}</Card.Header>
            <Card.Meta>
              <span className="date">{selectedActivity.date}</span>
            </Card.Meta>
            <Card.Description>{selectedActivity.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button.Group widths="2">
              <Button
                basic
                color="blue"
                content="Edit"
                // onClick={setEditMode}
                as={NavLink}
                to={`/editActivity/${id}`}
              />
              <Button
                basic
                color="grey"
                content="Cancel"
                onClick={cancelActivityView}
              />
            </Button.Group>
          </Card.Content>
        </Card>
      )}
    </>
  );
};

export default observer(ActivityDetails);
