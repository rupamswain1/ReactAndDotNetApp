import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from 'semantic-ui-react'
import axios from 'axios'
import List from 'semantic-ui-react/dist/commonjs/elements/List'
import ListItem from 'semantic-ui-react/dist/commonjs/elements/List/ListItem'

function App() {
  const [activity, setActivity] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:5000/api/Activities")
    .then(result=>setActivity(result.data))
  },[])
  return (
   <div className='App'>
      <Header as='h2' icon="users" content="Reactivities" floated='left'/>
      <div>
        {
          activity.length?
          <List>
            {
              activity.map(({id,title})=>{
                return <ListItem key={id}>
                  {title}
                </ListItem>
              })
            }
          </List>
          :<div>Loading.....</div>
        }
      </div>
   </div>
  )
}

export default App
