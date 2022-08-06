import './App.css';
import {Switch,Route,BrowserRouter as Router} from "react-router-dom"
// import Home from './Home.js'
// import Form from './Form.js'


function App() {
  return (
    <div className="App">
      <h1> Hello </h1>
       {/* <Router>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/Form' component={Form}></Route>
        </Switch>
      </Router>  */}
    </div>
  );
}

export default App;
