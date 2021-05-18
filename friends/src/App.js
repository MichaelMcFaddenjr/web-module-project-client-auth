import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.css';
import Login from './Components/Login'
import PrivateRoute from './Components/PrivateRoute';
import MyFriends from './Components/MyFriends'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute exact path="/myfriends" component={MyFriends} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
