import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';

import NavBar from './NavBar';
import { observer } from 'mobx-react-lite';
import { Outlet, useLocation } from 'react-router-dom';
import HomePage from '../../feature/home/HomePage';
import { ToastContainer } from 'react-toastify';
function App() {
  const { pathname } = useLocation();

  return (
    <div className="App">
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
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
