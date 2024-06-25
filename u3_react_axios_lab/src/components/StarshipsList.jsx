import { useEffect, useState } from 'react'
import axios from 'axios'
import { STARSHIP_PATH } from '../globals'
import { useNavigate } from 'react-router-dom'

function StarshipsList (props) {
    let navigate = useNavigate()
    const [starships, setStarships] = useState([])

    const showShip = (key) => {
        navigate(`${key}`)
      }

    useEffect(() => {
        const getStarships=async () => {
            const response = await axios.get(`${STARSHIP_PATH}`)
            setStarships(response.data.results)
            
        }
        getStarships()
    }, [])

    if (starships.length === 0) {
        return <h1>Starships taking off...</h1>
    } else {
        return (
            <div className="pathInfo">
                {
                    starships.map((starship, key) => (
                        <div key = {key} className="pathDesc" onClick={()=>showShip(key)}>
                            <h2>{starship.name}</h2>
                           
                            </div>
                    ))
                }
            </div>
        )
    }
    
}

export default StarshipsList