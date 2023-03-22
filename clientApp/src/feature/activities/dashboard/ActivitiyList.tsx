import React from 'react';
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/model/Activity';
import { useStore } from '../../../app/store/store';
import { observer } from 'mobx-react-lite';
import { NavLink } from 'react-router-dom';
interface Props {
  activities: Activity[];
}

const ActivitiyList = ({ activities }: Props) => {
  const {
    activityStore: { selectActivity, deleteActivity },
  } = useStore();
  return (
    <>
      {activities ? (
        <Segment>
          <Item.Group divided>
            {activities.map(
              ({ id, title, date, description, city, venue, category }) => {
                return (
                  <Item key={id}>
                    <Item.Content>
                      <Item.Header as="a">{title}</Item.Header>
                      <Item.Meta>{date}</Item.Meta>
                      <Item.Description>
                        <div>{description}</div>
                        <div>
                          {city},{venue}
                        </div>
                      </Item.Description>
                      <Item.Extra>
                        <Button
                          floated="right"
                          content="View"
                          color="blue"
                          // onClick={() => selectActivity(id)}
                          as={NavLink}
                          to={`${id}`}
                        />
                        <Button
                          floated="right"
                          content="Delete"
                          color="red"
                          onClick={() => deleteActivity(id)}
                        />

                        <Label basic content={category} />
                      </Item.Extra>
                    </Item.Content>
                  </Item>
                );
              }
            )}
          </Item.Group>
        </Segment>
      ) : (
        <div>Loading.....</div>
      )}
    </>
  );
};

export default observer(ActivitiyList);
