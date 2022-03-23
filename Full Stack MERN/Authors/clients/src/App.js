import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Dashboard from "./views/Dashboard";
import Create from "./views/Create";
import EditAuthor from "./views/EditAuthor";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Favorite Authors</h1>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/new">
            <Create />
          </Route>
          <Route exact path="/edit/:id">
            <EditAuthor />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
