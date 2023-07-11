import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../store/store';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
  const {
    activityStore: { setEditMode },
  } = useStore();
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} to="/" header>
          Reactivities
        </Menu.Item>
        <Menu.Item>
          <Menu.Item as={NavLink} to="/activities" name="Activities" />
          <Menu.Item as={NavLink} to="/errors" name="Errors" />
          <Menu.Item>
            <Button
              positive
              content="Create Activity"
              //
              as={NavLink}
              to="/createActivity"
            />
          </Menu.Item>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default observer(NavBar);
