import { useEffect, useState } from 'react'
import axios from 'axios'
import { STARSHIP_PATH } from '../globals'

function StarshipsList (props) {
    console.log('StarshipList', props)

    const [starships, setStarships] = useState([])

    useEffect(() => {
        const getStarships=async () => {
            const response = await axios.get(`${STARSHIP_PATH}`)
            console.log(response)
            setStarships(response.data.results)
            
        }
        getStarships()
    }, [])
   console.log(starships)
    if (starships.length === 0) {
        return <h1>Starships taking off...</h1>
    } else {
        return (
            <div className="pathInfo">
                {
                    starships.map((starship) => (
                        <div key = {starship.name} className="pathDesc">
                            <h2>{starship.name}</h2>
                            <p>Model: {starship.model}</p>
                            <p>Manufacturer: {starship.manufacturer}</p>
                            <p>Class: {starship.starship_class}</p>
                            <p>Cargo Capacity: {starship.cargo_capacity}</p>
                            <p>Passengers: {starship.passengers}</p>
                            </div>
                    ))
                }
            </div>
        )
    }
    
}

export default StarshipsList