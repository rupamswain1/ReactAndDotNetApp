import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';
interface Props {
  onCreateClick: any;
}
const NavBar = ({ onCreateClick }: Props) => {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>Reactivities</Menu.Item>
        <Menu.Item>
          <Menu.Item name="Activities" />
          <Menu.Item>
            <Button
              positive
              content="Create Activity"
              onClick={() => onCreateClick(true)}
            />
          </Menu.Item>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
