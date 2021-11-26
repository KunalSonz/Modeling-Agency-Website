import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () =>{

  function Click1(){
    let right = document.getElementById("right");
    let opened = document.getElementById("Navbar");
    let left = document.getElementById("left");
    let Navbg = document.getElementById("NavbarT");

    right.style.display="none";
    opened.style.display="flex";
    left.style.display="block";
    Navbg.style.backgroundColor = "rgba(0, 0, 0, 0.7)"
    
  }

  function Click2(){
    let left = document.getElementById("left");
    let opened = document.getElementById("Navbar");
    let right = document.getElementById("right");
    let Navbg = document.getElementById("NavbarT");

    left.style.display="none";
    opened.style.display="none";
    right.style.display="block";
    Navbg.style.backgroundColor = "rgba(0, 0, 0, 0)"
  }


  return(
    <>
      <div  id = "NavbarT">
        <div className = "navArrow">
          <i id = "right" class="fas fa-bars" onClick = {Click1}></i>
        </div>
        <div className = "navArrow">
        <i id = "left" class="fas fa-times" onClick = {Click2}></i>
        </div> 
        <div id="Navbar" className = "navMenu">
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

export default Nav;