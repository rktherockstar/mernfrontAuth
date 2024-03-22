import React from 'react'
import TopNavigation from './TopNavigation'
import { useSelector } from 'react-redux'


function Home() {
    let storeObj = useSelector((store)=>{
        console.log(store);
        return store;
    })
  return (
    <div>
        <TopNavigation/>
        <h1>Welcome to MERN Authentication App!</h1><br></br><h2> {storeObj.loginReducer.userDetails.firstName } 
        {storeObj.loginReducer.userDetails.lastName }
        </h2>
        <img src={`https://mernauthentication-ebc7.onrender.com/${storeObj.loginReducer.userDetails.profilePic}`}></img>
        <p></p>
    </div>
  )
}

export default Home