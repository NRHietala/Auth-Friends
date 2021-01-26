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
      <h2>Your Current Friends!</h2>
      {friends.map(friend => {
        return <h3 key={friend.id}>{friend.name}</h3>
      })}
    </div>
  )
}

export default FriendVault
