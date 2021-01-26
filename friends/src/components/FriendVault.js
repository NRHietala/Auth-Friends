import React,{ useEffect, useState } from 'react';
import styled from 'styled-components';

import axiosDev from '../utils/axiosDev';

const initialFormValues = {
  name:"",
  age: "",
  email:""
}

const StyledFriendVault = styled.div`
background:tan;

`

function FriendVault() {
const [ friends, setFriends ] = useState([]);
const [ formValues, setFormValues ] = useState(initialFormValues);


  useEffect(() => {
    axiosDev()
    .get('/friends')
    .then(res => {
      console.log(res)
      setFriends(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  const postNewFriend = () => {
    axiosDev()
    .post('/friends', formValues)
    .then(res => {
      setFriends({
        ...friends,
        formValues
      })
    })
  }

  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]:e.target.value
    })
  }

  return (
    <StyledFriendVault>
      <h3>Create A New Friend!</h3>
      <form className="formGroup" onSubmit={postNewFriend}>
        <label className="formLabel">Name: 
          <input
          className="formInput"
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
          value={formValues.name}
          />
        </label>
        <br/>
        <label className="formLabel">Age: 
          <input
          className="formInput"
          type="text"
          name="age"
          placeholder="Enter Age"
          onChange={handleChange}
          value={formValues.age}
          />
        </label>
        <br/>
        <label className="formLabel">Email: 
          <input
          className="formInput"
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
          value={formValues.email}
          />
        </label>
        <br/>
        <button>Make a friend!</button>
      </form>
      <h2>Your Current Friends!</h2>
      {friends.map(friend => {
        return (
          <div className="friend" key={friend.id}>
            <h3>{friend.name}</h3>
            <h4>{friend.age}</h4>
            <h4>{friend.email}</h4>
          </div>
        )
      })}
    </StyledFriendVault>
  )
}

export default FriendVault
