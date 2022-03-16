import './App.css';
import {
  BrowserRouter,
  Link,
  Switch,
  Route

} from "react-router-dom"
import Home from './components/Home';
import Display2 from './components/Display2';
import Display3 from './components/Display3';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <h1>Routing Practice</h1>

        <p>
          <Link to="/home">Home</Link>

        </p>

        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/:keyword">
            <Display2 />
          </Route>
          <Route exact path="/:keyword/:textColor?/:bgColor?">
            <Display3 />
          </Route>



        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
