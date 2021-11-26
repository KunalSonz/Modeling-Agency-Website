import React from 'react';
import { Link } from 'react-router-dom';

const Nav2 = () =>{

  function Click1(){
    let right = document.getElementById("right2");
    let opened = document.getElementById("Navbar2");
    let left = document.getElementById("left2");
    let Navbg = document.getElementById("Navbar2T");
    
    right.style.display="none";
    opened.style.display="flex";
    left.style.display="block";
    Navbg.style.backgroundColor = "e5e5e5c9"
    
  }

  function Click2(){
    let left = document.getElementById("left2");
    let opened = document.getElementById("Navbar2");
    let right = document.getElementById("right2");
    let Navbg = document.getElementById("Navbar2T");

    left.style.display="none";
    opened.style.display="none";
    right.style.display="block";
    Navbg.style.backgroundColor = "rgba(0, 0, 0, 0)"
  }


  return(
    <>
      <div  id = "Navbar2T">
        <div className = "navArrow2">
          <i id = "right2" class="fas fa-bars" onClick = {Click1}></i>
        </div>
        <div className = "navArrow2">
        <i id = "left2" class="fas fa-times" onClick = {Click2}></i>
        </div> 
        <div id="Navbar2" className = "navMenu2">
          <ul>
          <Link to = "/" style = {{textDecoration:'none'}}>
                <li>Home</li>
            </Link> 
            <Link to = "/aboutus" style = {{textDecoration:'none'}}>
                <li>About Us</li>
            </Link> 
            <Link to = "/services" style = {{textDecoration:'none'}}>
                <li>Services</li>
            </Link>
            <Link to = "/models" style = {{textDecoration:'none'}}>
                <li>Models</li>
            </Link>
            <Link to = "/contactus" style = {{textDecoration:'none'}}>
                <li>Contact Us</li>
            </Link>
          </ul>
        </div>        
      </div>
    </>
  )
} 

export default Nav2;