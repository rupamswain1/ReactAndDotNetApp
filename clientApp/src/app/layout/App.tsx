import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'semantic-ui-css/semantic.min.css';
import { Container, Header } from 'semantic-ui-react'
import axios from 'axios'
import List from 'semantic-ui-react/dist/commonjs/elements/List'
import ListItem from 'semantic-ui-react/dist/commonjs/elements/List/ListItem'
import { Activity } from '../model/Activity'
import NavBar from './NavBar'
import ActivityDashBoard from '../../feature/activities/dashboard/ActivityDashBoard';

function App() {
  const [activity, setActivity] = useState<Activity[]>([])
  useEffect(()=>{
    axios.get<Activity[]>("http://localhost:5000/api/Activities")
    .then(result=>setActivity(result.data))
  },[])
  return (
   <div className='App'>
      <NavBar/>
      <Container style={{marginTop:'7rem'}}>
        <ActivityDashBoard activities={activity}/>
      </Container>
   </div>
  )
}

export default App
