import React from 'react';

import { Button, Item, Label, Segment } from 'semantic-ui-react';
import { Link, NavLink } from 'react-router-dom';
import { useStore } from '../../../app/store/store';
import { Activity } from '../../../app/model/Activity';
interface Props {
  activity: Activity;
}

const ActivityListItem = ({
  activity: { id, title, date, description, city, venue, category },
}: Props) => {
  const {
    activityStore: { deleteActivity, selectActivity },
  } = useStore();

  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image
              size="tiny"
              circular
              src="https://source.unsplash.com/featured/300x201"
            />
            <Item.Content>
              <Item.Header
                onClick={() => selectActivity(id)}
                as={NavLink}
                to={`${id}`}
              >
                {title}
              </Item.Header>
              <Item.Description>Hosted by BOB</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment secondary>Attendees Go Here</Segment>
      <Segment clearing>
        <span>{description}</span>
        <Button
          floated="right"
          content="View"
          color="blue"
          onClick={() => selectActivity(id)}
          as={NavLink}
          to={`${id}`}
        />
      </Segment>
    </Segment.Group>
    // <Item key={id}>
    //   <Item.Content>
    //     <Item.Header as="a">{title}</Item.Header>
    //     <Item.Meta>{date}</Item.Meta>
    //     <Item.Description>
    //       <div>{description}</div>
    //       <div>
    //         {city},{venue}
    //       </div>
    //     </Item.Description>
    //     <Item.Extra>
    //       <Button
    //         floated="right"
    //         content="View"
    //         color="blue"
    //         // onClick={() => selectActivity(id)}
    //         as={NavLink}
    //         to={`${id}`}
    //       />
    //       <Button
    //         floated="right"
    //         content="Delete"
    //         color="red"
    //         onClick={() => deleteActivity(id)}
    //       />

    //       <Label basic content={category} />
    //     </Item.Extra>
    //   </Item.Content>
    // </Item>
  );
};

export default ActivityListItem;
