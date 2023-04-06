import React from 'react';

import { Button, Item, Label } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { useStore } from '../../../app/store/store';
import { Activity } from '../../../app/model/Activity';
interface Props {
  activity: Activity;
}

const ActivityListItem = ({
  activity: { id, title, date, description, city, venue, category },
}: Props) => {
  const {
    activityStore: { deleteActivity },
  } = useStore();

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
};

export default ActivityListItem;
