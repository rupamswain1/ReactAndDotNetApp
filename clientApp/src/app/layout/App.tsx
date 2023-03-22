import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';

import NavBar from './NavBar';
import { observer } from 'mobx-react-lite';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Container style={{ marginTop: '7rem' }}>
        <Outlet />
      </Container>
    </div>
  );
}

export default observer(App);
