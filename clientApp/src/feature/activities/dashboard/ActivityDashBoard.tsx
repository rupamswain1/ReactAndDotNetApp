import React, { useState } from 'react';
import { Grid, List, ListItem } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { Activity } from '../../../app/model/Activity';
import ActivityForm from '../form/ActivityForm';
import ActivitiyList from './ActivitiyList';
import ActivityDetails from './ActivityDetails';
import { useStore } from '../../../app/store/store';
interface Props {
  activities: Activity[];
}

const ActivityDashBoard = ({ activities }: Props) => {
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivitiyList activities={activities} />
      </Grid.Column>
      <Grid.Column width="6">
        <ActivityDetails />

        <ActivityForm />
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivityDashBoard);
