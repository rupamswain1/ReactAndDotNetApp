import React from 'react';
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/model/Activity';

interface Props {
  activities: Activity[];
  setActivityId: any;
}

const ActivitiyList = ({ activities, setActivityId }: Props) => {
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
                          onClick={() => setActivityId(id)}
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

export default ActivitiyList;
