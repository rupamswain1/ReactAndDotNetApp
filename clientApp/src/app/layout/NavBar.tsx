import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../store/store';

const NavBar = () => {
  const {
    activityStore: { setEditMode },
  } = useStore();
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>Reactivities</Menu.Item>
        <Menu.Item>
          <Menu.Item name="Activities" />
          <Menu.Item>
            <Button positive content="Create Activity" onClick={setEditMode} />
          </Menu.Item>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default observer(NavBar);
