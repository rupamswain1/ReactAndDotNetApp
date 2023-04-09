import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Item, Label, List, Segment } from 'semantic-ui-react';

const ActivityDetailedSidebar = () => {
  return (
    <>
      <Segment
        textAlign="center"
        style={{ border: 'none' }}
        attached="top"
        secondary
        inverted
        colors="teal"
      >
        3 People Going
      </Segment>
      <Segment attached>
        <List relaxed divided>
          <Item style={{ position: 'relative' }}>
            <Label
              style={{ position: 'absolute' }}
              color="orange"
              ribbon="right"
            >
              Host
            </Label>
            <Image size="tiny" src={''} />
            <Item.Content verticalAlign="middle">
              <Item.Header as="h3">
                <Link to="#">Sally</Link>
              </Item.Header>
            </Item.Content>
          </Item>
        </List>
      </Segment>
    </>
  );
};

export default ActivityDetailedSidebar;
