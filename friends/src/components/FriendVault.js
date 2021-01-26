import React,{ useEffect, useState } from 'react';

import axiosDev from '../utils/axiosDev';

function FriendVault() {
const [ friends, setFriends ] = useState([]);


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

  return (
    <div>
      {friends.map(friend => {
        return <h1 key={friend.id}>{friend.name}</h1>
      })}
    </div>
  )
}

export default FriendVault
