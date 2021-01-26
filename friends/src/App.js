import './App.css';
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Login from './components/Login';



function App() {

  const logOut = () => {

  }

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link onClick={logOut}>Log Out</Link>
          </li>
          <li>
            <Link to="/protected">Friend's Vault</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
