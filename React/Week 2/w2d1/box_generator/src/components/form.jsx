import React, { useState } from 'react'

const Form = (props) => {
    const [boxColor, setBoxColor] = useState("")
    const [size, setSize] = useState("")
    const [sizeError, setSizeError] = useState("")



    const submitBox = (e) => {
        // prevent refresh
        e.preventDefault()
        const width = parseInt(size)
        if(isNaN(width)){
            setSizeError("Must type in a number")
            return;
        }
        // previous box colors and new color
        props.newBox({color: boxColor, size: width})
        setBoxColor("")
        setSize("")
        setSizeError("")


    }

    return (
        <fieldset>
            <legend>Form</legend>
            <form onSubmit={(e) => {
                submitBox(e)
            }}>
                <div>
                    <label>Color</label>
                    <input
                        onChange={(e) => {
                            setBoxColor(e.target.value);
                        }}
                        type="text"
                        value={boxColor}
                        placeholder="Enter a Color, i.e. red" />
                </div>
                <div>
                    <label>Size</label>
                    <label style = {{color:"red"}}>{sizeError}</label>
                    <input
                        onChange={(e) => {
                            setSize(e.target.value);
                        }}
                        type="number"
                        value={size}
                        placeholder="Enter a Size, i.e. 100" />
                </div>

                <button>Add</button>

            </form>
        </fieldset>
    )
}

export default Form
