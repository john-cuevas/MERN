import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Create from "./views/Create"
import Dashboard from "./views/Dashboard"
// import OneProduct from "./views/OneProduct"
// import EditProduct from "./views/EditProduct"
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Products DB</h1>
        <Switch>
          <Route exact path = "/products">
            <Dashboard/>
          </Route>
          <Route exact path = "/products/new">
            <Create/>
          </Route>
        </Switch>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
