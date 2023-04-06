import React, { Fragment } from 'react';
import { Button, Header, Item, Label, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/model/Activity';

import { observer } from 'mobx-react-lite';
import ActivityListItem from './ActivityListItem';
import { useStore } from '../../../app/store/store';
interface Props {
  activities: Activity[];
}

const ActivitiyList = ({ activities }: Props) => {
  const {
    activityStore: { groupActivityByDate, deleteActivity },
  } = useStore();
  console.log(groupActivityByDate);
  return (
    <>
      {activities ? (
        <>
          {groupActivityByDate.map(([group, activities]) => {
            return (
              <Fragment key={group}>
                <Header sub color="teal">
                  {group}
                </Header>
                <Segment>
                  <Item.Group divided>
                    {activities.map((activity) => {
                      return (
                        <ActivityListItem
                          activity={activity}
                          key={activity.id}
                        />
                      );
                    })}
                  </Item.Group>
                </Segment>
              </Fragment>
            );
          })}
        </>
      ) : (
        <div>Loading.....</div>
      )}
    </>
  );
};

export default observer(ActivitiyList);
