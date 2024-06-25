import StarshipList from './StarshipsList'
import Starship from './Starship'
import Home from './Home'
import Films from './Films'
import People from './People'
import Planet from './Planet'
import { Routes, Route } from 'react-router-dom'


function Main (props) {

  return (
  <div className="main">
  <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/Starships" element={<StarshipList starships={props.starshipList}/>} />
     <Route path="/starships/:id" element={<Starship />} />
     <Route path="/films" element={<Films />} />
     <Route path="/people" element={<People />} />
     <Route path="/planet" element={<Planet />} />
     
    </Routes>

  </div>

  )
}
export default Main