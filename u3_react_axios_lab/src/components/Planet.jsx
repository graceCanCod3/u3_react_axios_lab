import { useEffect, useState } from "react"
import { PLANET_PATH } from "../globals"
import axios from "axios"


export default function Planet () {

    const [planet, setPlanet] = useState([])

    useEffect(() => {
        const getPlanet=async () => {
            const response = await axios.get(`${PLANET_PATH}`)
            setPlanet(response.data.results)
        }
        getPlanet()
    }, [])
    
    if (planet.length === 0) {
        return <h1>Loading planet...</h1>
    } else {
        return (
            <div className="pathInfo">
                {
                    planet.map((planet) => (
                        <div key = {planet.name} className="pathDesc">
                            <h2>{planet.name}</h2>
                            
                            </div>
                    ))
                }
            </div>
        )
    }

}