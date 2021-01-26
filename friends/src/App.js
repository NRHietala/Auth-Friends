import './App.css';
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Login from './components/Login';
import PrivateRoute from '../src/components/PrivateRoute';
import FriendVault from '../src/components/FriendVault';

const StyledApp = styled.div`
display:flex;
flex-flow:column nowrap;
background:grey;
height: 100vh;

ul {
  display:flex;
  flex-flow:row nowrap;
  justify-content:space-around;
  align-items:center;
  padding: 15px;
}

li {
  list-style-type:none;
  background: skyblue;
  padding: 3px 5px;
  border:2px whitesmoke solid;
}
a {
color:black;
text-decoration:none;
}
`;

function App() {

  const logOut = () => {
    localStorage.removeItem('token')
    window.location.href = '/';
  }

  return (
    <StyledApp className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
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
        <Route exact path="/"/>
        <Route path="/login" component={Login}/>
        <PrivateRoute exact path="/protected" component={FriendVault} />
      </Switch>
      
    </StyledApp>
  );
}

export default App;
