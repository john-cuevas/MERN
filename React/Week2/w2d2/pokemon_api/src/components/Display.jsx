import React from 'react'

// const Display = (props) => {
//     const {pokemon} = props
//     return ({
//         <div>
//             {pokemon.length > 0 && pokemon.map((pokemon, index)=>{
//                 return (<div key={index}>{pokemon.name}</div>)
//             })}
//         </div>
        
//         // map function
//     }
        
//     )
// }

// export default Display
const Display = (props) => {
    const {pokemon} = props
    return (
        <div>
            <h1>Display Component: {pokemon.name}</h1>
            {/* <img src={pokemon.sprites.front_default} /> */}
            
        </div>
    )
}

export default Display