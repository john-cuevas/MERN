import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Create from "./views/Create"
import Dashboard from "./views/Dashboard"
import OneProduct from "./views/OneProduct"
import EditProduct from "./views/EditProduct"
import Main from "./views/Main"
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
          <Route exact path = "/products/:id">
            <OneProduct/>
          </Route>
          <Route exact path = "/products/:id/edit">
            <EditProduct/>
          </Route>
          <Route exact path = "/">
            <Main/>
          </Route>
        </Switch>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
