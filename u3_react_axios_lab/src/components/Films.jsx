import { useEffect, useState } from "react"
import { FILM_PATH } from "../globals"
import axios from "axios"


export default function Films () {

    const [films, setFilms] = useState([])

    useEffect(() => {
        const getFilms=async () => {
            const response = await axios.get(`${FILM_PATH}`)
            setFilms(response.data.results)
        }
  getFilms()
    }, [])
    
   //console.log(film)
    if (films.length === 0) {
        return <h1>Preparing film...</h1>
    } else {
        return (
            <div className="pathInfo">
                {
                    films.map((film) => (
                        <div key = {film.title} className="pathDesc">
                            <h2>{film.title}</h2>
                            
                            </div>
                    ))
                }
            </div>
        )
    }

}