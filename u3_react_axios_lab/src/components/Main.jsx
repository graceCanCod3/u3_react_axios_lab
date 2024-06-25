import StarshipList from './StarshipsList'
import Home from './Home'
import { Routes, Route } from 'react-router-dom'


function Main (props) {

  return (
  <>
  <Routes>
     <Route path="/StarshipList" element={<StarshipList starships={props.starshipList}/>} />
     <Route path="/" element={<Home />} />

    </Routes>

  </>

  )
}
export default Main