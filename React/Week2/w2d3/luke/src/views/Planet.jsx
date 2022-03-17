import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"

const Planet = () => {
    const { id } = useParams()
    const [planet, setPlanet] = useState()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => {
                console.log(response.data)
                setPlanet(response.data)
            })
    }, [id])


    return (
        // <h1>People {id}</h1>
        
            planet ?
                <div>
                    < h1 > { planet.name } </h1 >
                    <h4> Climate: {planet.climate}</h4>
                    <h4> Terrain: {planet.terrain}</h4>
                    <h4> Surface Water: {planet.surface_water}</h4>
                    <h4> Population: {planet.population}</h4>
                </div>:

                    <h1>These aren't the droids you're looking for</h1>

        
    )
}

export default Planet