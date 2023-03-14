import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Card, Icon, Image } from 'semantic-ui-react';
import agent from '../../../app/api/agent';
import { Activity } from '../../../app/model/Activity';
import { useStore } from '../../../app/store/store';
import { observer } from 'mobx-react-lite';

const ActivityDetails = () => {
  const {
    activityStore: {
      cancelActivityView,
      setEditMode,
      selectedActivity,
      activityViewMode,
    },
  } = useStore();
  useEffect(() => {}, []);

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
              <Button basic color="blue" content="Edit" onClick={setEditMode} />
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
