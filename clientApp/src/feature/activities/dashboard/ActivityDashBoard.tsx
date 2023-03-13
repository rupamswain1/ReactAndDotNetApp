import React, { useState } from 'react';
import { Grid, List, ListItem } from 'semantic-ui-react';
import { Activity } from '../../../app/model/Activity';
import ActivityForm from '../form/ActivityForm';
import ActivitiyList from './ActivitiyList';
import ActivityDetails from './ActivityDetails';

interface Props {
  activities: Activity[];
  createFormDisplay: boolean;
  setCreateFormDisplay: any;
}

const ActivityDashBoard = ({
  activities,
  createFormDisplay,
  setCreateFormDisplay,
}: Props) => {
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
          <ActivityDetails
            activityId={activityId}
            onCancel={() => setActivityId('')}
            editMode={handleEditMode}
          />
        )}
        {(editForm || createFormDisplay) && (
          <ActivityForm
            cancelEdit={() => {
              setEditForm(''), setCreateFormDisplay(false);
            }}
            editActivityId={editForm}
            createActivityMode={createFormDisplay}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};

export default ActivityDashBoard;
