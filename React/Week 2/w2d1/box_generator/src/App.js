import React, { useState } from "react"
import './App.css';
import Form from './components/form'
// import Display from './components/display'

function App() {
  const [boxes, setBoxes] = useState([])

  const newBox = (newBox) =>{
    // get all boxes
    setBoxes([...boxes, newBox])
  }

  return (
    <div className="App">
      <Form newBox = {newBox}/>

      
      <div style={{ display: "flex" }}>
        {

          boxes.map((box, i)=>{
            return <div 
            key = {i} 
            style = {{
              backgroundColor: box.color, 
              width: box.size,
              height: box.size,
              marginRight: 10
              }}> 
            </div>

          })
        }
      </div>


    </div>
  );
}

export default App;
