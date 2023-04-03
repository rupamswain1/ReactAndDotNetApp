import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';

import NavBar from './NavBar';
import { observer } from 'mobx-react-lite';
import { Outlet, useLocation } from 'react-router-dom';
import HomePage from '../../feature/home/HomePage';
function App() {
  const { pathname } = useLocation();

  return (
    <div className="App">
      {pathname === '/' ? (
        <HomePage />
      ) : (
        <>
          <NavBar />
          <Container style={{ marginTop: '7rem' }}>
            <Outlet />
          </Container>
        </>
      )}
    </div>
  );
}

export default observer(App);
