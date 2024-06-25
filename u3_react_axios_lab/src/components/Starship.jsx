import { useEffect, useState } from "react"
import axios from 'axios'
import { useParams} from "react-router-dom"
import { STARSHIP_PATH } from "../globals"


export default function Starship () {

    const [starship, setStarship] = useState()
    let {id} = useParams()

    useEffect (()=> {
        const getStarship = async () => {
            const response = await axios.get(`${STARSHIP_PATH}/${id}`)
            setStarship(response.data)
        }
        getStarship()
    },[])

    return Starship ? (
        <div className="detail">
            <h2 className="detail-name">{ship.name}</h2>
            <h2>Starship Details</h2>
            <h3>Ship name: {ship.name}</h3>
            <h4>Model: {ship.model}</h4>
            <h4>Length: {starship.length}</h4>
            <h4>Max Passengers: {starship.passengers}</h4>
            <h4>Manufacturer: {ship.manufacturer}</h4>
        </div>
    ) : <h2>Getting ready to board...</h2>
}