import React from 'react';
import Nav from './nav1';

const Home = () =>{ 


  return(
    <>
      <div className = "home">
        <Nav/>
        <div className = "homeData">
          <div>
          <h1>Glance Models</h1>
          <h5>Your Journey To SuperModel</h5>
          <h3>Join Us</h3>
          </div>          
        </div>
      </div>
    </>
  )
} 

export default Home;