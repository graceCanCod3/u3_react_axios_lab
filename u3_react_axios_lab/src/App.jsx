

import { useState, useEffect } from 'react'
import { BASE_URL} from './globals'
import axios from 'axios'
import Header from './components/Header'
import Main from './components/Main'
import './App.css'

function App() {

  const [starships, setStarships] = useState([])

  useEffect(() =>{

    const getStarhips = async () => {
      const response = await axios.get(`${BASE_URL}`)
      setStarships(response.data.results)
      }
      
      getStarhips()  
      }, [])
      
      console.log("data", starships)


  return (
    
      <div className='App'>

        <Header />
        <Main starships = {starships}/>

       </div>
  
  
  )
}

export default App
