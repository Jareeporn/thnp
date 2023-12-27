import React from 'react'
import Nav from './Nav'
import profilepic from "../images/profile.jpg"

function Profile() {
    const user = {
        Number: "6304849",
        firstName: "Thanaporn",
        lastName: "Naksinlapawijit",
      }
  return (
    <>
    <Nav/>
    <div>
      <br></br>
      <h6>{user.firstName} {user.lastName} {user.Number} </h6>
      <br></br>
      <img src={profilepic} class = "center"/>
      <br></br>
      <p>Nickname : mo </p>
      <p>Age : 21</p>
      <p>Birthday : 03/01/2002</p>
      <p>Studying at Rangsit University,Computer Engineering.</p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '115vh', margin: '0' }}>
    </div>
    </div>
    </>
  )
}

export default Profile