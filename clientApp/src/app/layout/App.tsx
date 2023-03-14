import { useState, useEffect, useContext } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header } from 'semantic-ui-react';

import { Activity } from '../model/Activity';
import NavBar from './NavBar';
import ActivityDashBoard from '../../feature/activities/dashboard/ActivityDashBoard';
import agent from '../api/agent';
import { useStore } from '../store/store';
import { observer } from 'mobx-react-lite';

function App() {
  const { activityStore } = useStore();
  const { loadActivities, activities } = activityStore;
  useEffect(() => {
    loadActivities();
  }, [activityStore]);
  return (
    <div className="App">
      <NavBar />
      <Container style={{ marginTop: '7rem' }}>
        <ActivityDashBoard activities={activities} />
      </Container>
    </div>
  );
}

export default observer(App);
