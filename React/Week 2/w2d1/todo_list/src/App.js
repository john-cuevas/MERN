import React, {useState} from 'react'
import InputForm from "./components/InputForm"
import InputDisplay from "./components/InputDisplay"
import './App.css';

// lift state
// 1. parent component - create state & function to change state


function App() {
  const [tasks, setTasks] = useState([])

  const receiveTask = (newTask) =>{ // gets new task once form is submitted
    setTasks([...tasks, newTask]) //.push never use .push for state
  }

  const handleUpdate = (allTasks) =>{
    setTasks(allTasks)
  }

  return (
    <div className="container mt-5">
      
      <InputForm onNewTask = {receiveTask}/>
      <InputDisplay tasks = {tasks} handleUpdate = {handleUpdate}/>

    </div>
  );
}

export default App;
