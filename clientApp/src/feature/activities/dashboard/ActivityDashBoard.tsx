import React, { useState } from 'react';
import { Grid, List, ListItem } from 'semantic-ui-react';
import { Activity } from '../../../app/model/Activity';
import ActivityForm from '../form/ActivityForm';
import ActivitiyList from './ActivitiyList';
import ActivityDetails from './ActivityDetails';

interface Props {
  activities: Activity[];
}

const ActivityDashBoard = ({ activities }: Props) => {
  const [activityId, setActivityId] = useState('');
  const [editForm, setEditForm] = useState<string>('');
  const handleEditMode = (id: string) => {
    setEditForm(id);
    setActivityId('');
  };
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivitiyList activities={activities} setActivityId={setActivityId} />
      </Grid.Column>
      <Grid.Column width="6">
        {activityId && (
          <ActivityDetails activityId={activityId} editMode={handleEditMode} />
        )}
        <ActivityForm
          cancelEdit={() => setEditForm('')}
          editActivityId={editForm}
        />
      </Grid.Column>
    </Grid>
  );
};

export default ActivityDashBoard;
