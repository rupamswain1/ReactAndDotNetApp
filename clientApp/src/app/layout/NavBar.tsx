import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'

const NavBar = () => {
  return (
    <Menu inverted fixed="top">
        <Container>
            <Menu.Item header>
                Reactivities
            </Menu.Item>
            <Menu.Item>
                <Menu.Item name="Activities"/>
                <Menu.Item>
                    <Button positive content="Create Activity"/>
                </Menu.Item>
            </Menu.Item>
        </Container>
    </Menu>
  )
}

export default NavBar