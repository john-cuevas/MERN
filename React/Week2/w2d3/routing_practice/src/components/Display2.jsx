import React from 'react'
import {useParams} from "react-router"

const Display2 = () => {
    const {keyword} = useParams()
    if (isNaN(keyword)){
        return ( 
                <h1>The word is {keyword}</h1>      
        )
    }
    else{
        return ( 
            <h1>The number is {keyword}</h1>      
    )
    }
}

export default Display2

// return (
//     <h1>The word is {keyword}</h1>
// )