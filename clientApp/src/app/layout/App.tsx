import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header } from 'semantic-ui-react';
import axios from 'axios';
import List from 'semantic-ui-react/dist/commonjs/elements/List';
import ListItem from 'semantic-ui-react/dist/commonjs/elements/List/ListItem';
import { Activity } from '../model/Activity';
import NavBar from './NavBar';
import ActivityDashBoard from '../../feature/activities/dashboard/ActivityDashBoard';
import agent from '../api/agent';

function App() {
  const [activity, setActivity] = useState<Activity[]>([]);
  const [createFormDisplay, setCreateFormDisplay] = useState(false);
  useEffect(() => {
    agent.Activities.list().then((response) => {
      setActivity(response);
    });
  }, []);
  return (
    <div className="App">
      <NavBar onCreateClick={setCreateFormDisplay} />
      <Container style={{ marginTop: '7rem' }}>
        <ActivityDashBoard
          activities={activity}
          createFormDisplay={createFormDisplay}
          setCreateFormDisplay={setCreateFormDisplay}
        />
      </Container>
    </div>
  );
}

export default App;
