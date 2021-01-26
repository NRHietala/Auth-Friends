import './App.css';
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Login from './components/Login';
import axiosDev from './utils/axiosDev';
import PrivateRoute from '../src/components/PrivateRoute';
import FriendVault from '../src/components/FriendVault';



function App() {

  const StyledApp = styled.div`
  display:flex;
  flex-flow:column nowrap;
  align-items:center;
  justify-content:center;

  a {
  text-decoration: none;
  color:black;
}
  `

  const logOut = () => {
    axiosDev()
    .post('/logout')
    .then(res => {
      localStorage.removeItem('token')
      window.location.href = '/login';
    })
  }

  return (
    <StyledApp className="App">
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
        <Route path="/login" component={Login}/>
        <PrivateRoute exact path="/protected" component={FriendVault} />
      </Switch>
      
    </StyledApp>
  );
}

export default App;
