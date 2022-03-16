import React from 'react'
import {useParams} from "react-router"

const Display3 = () => {
    const {keyword, textColor, bgColor} = useParams()

    if (isNaN(keyword)){
        return ( 
                <h1 style={{color: textColor, backgroundColor: bgColor}} >The word is {keyword}</h1>      
        )
    }
    else{
        return ( 
            <h1 style={{color: textColor, backgroundColor: bgColor}}>The number is {keyword}</h1>      
    )
    }
    
}

export default Display3