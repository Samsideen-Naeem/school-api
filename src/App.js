import React, { useState } from 'react'
import ProfileCard from './components/ProfileCard'
import ProfileForm  from './components/ProfileForm'

function App() {


  const [allProfile, setAllprofiles] = useState([

    {
      firstname:"Samsideen",
      lastname: "Naeem",
      email:"comfort@gmail.com",
      phone:"0246183596"
    }
  ])

const updateprofile = (profile) => {
  let arr = allProfile;
  arr.push(profile)
  setAllprofiles([...arr])
};

  return (
    <>
    <div className='app'>
  <h1>Our profile maker</h1>
    </div>
    <ProfileForm submit={updateprofile} /> 
    <hr />
    <div className='list'>
      {allProfile.map((person, index) =>(
       <ProfileCard key={index} card={person} /> 
      ))}



    </div>
    </>
  )
}

export default App