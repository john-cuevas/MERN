import './App.css';
import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Form from './components/Form';
import People from './views/People';
import Planet from './views/Planet';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Luke APIWalker</h1>
        <Form />
        <Switch>
          <Route path="/people/:id">
            <People />
          </Route>
          <Route path="/planets/:id">
            <Planet />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
