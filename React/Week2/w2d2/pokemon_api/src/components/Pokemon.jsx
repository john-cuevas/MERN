import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import Display from './Display'

const Pokemon = (props) => {

    const [pokemon, setPokemon] = useState([])

    // Get one pokemon 

    // const useThen = () => {
    //     fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
    //         .then(response => {
    //             console.log(response)
    //             return response.json()
    //         })
    //         .then(jsonResponse => {
    //             console.log(jsonResponse)
    //             console.log(jsonResponse.name)
    //             setPokemon(jsonResponse)
    //         })

    // }

    // Get all pokemon use then

    const useThenAll = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=807`)

            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(jsonResponse => {
                console.log(jsonResponse)
                // console.log(jsonResponse.results)
                setPokemon(jsonResponse.results)
            })

    }
    const useAxios = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=807`)

            .then(response => {
                console.log(response.data.results)
                setPokemon(response.data.results)
            })
            .catch (err => console.log(err))

    }
    // useEffect(() => {
    //         fetch(`https://pokeapi.co/api/v2/pokemon?limit=807`)
    
    //             .then(response => {
    //                 return response.json()
    //             })
    //             .then(response => {
    //                 setPokemon({
    //                     pokemon: response.results
    //                 })
                

    // }, []) 

    
    return (
        <div>
            <button onClick={useThenAll}>Fetch All Pokemon with Then</button>
            <button onClick={useAxios}>Fetch All Pokemon with Axios</button>
            <div>
                {pokemon.length > 0 && pokemon.map((pokemon, index) => {
                    return (<div key = {index}> {pokemon.name} </div>)
                })}
            </div>


        </div>
    )
    // return (
    //     <div>
    //         {/* <button onClick={useThen}>Fetch one Pokemon with Then</button> */}
    //         <button onClick={useEffect}>Fetch All Pokemon with Then</button>
    //         {pokemon ?
    //             <div>
    //                 <h1>{pokemon.name}</h1>
    //             </div> :
    //             <h1>Fetch pokemon by clicking on button</h1>
    //         }
    //         {/* {
    //             pokemon?
    //                 <Display pokemon = {pokemon} />:
    //             <h1>Fetch pokemon by clicking on button</h1>
    //         } */}
    //     </div>
    // )
}

export default Pokemon