
import React from 'react'
import './btn.css'


function About  ()  {
  return (
    
    /* <Heading  title={"About"} />*/
    <>
    <h2> HEY! This Is About Page</h2>
    <div className="wrapper">
    <div className="static-text"></div>
    <ul className="dynamic-text">
    <li><span>  THIS IS ABOUT PAGE.....</span></li>
    <li><span>I AM SOFTWARE ENGINER........</span></li>
    <li><span>MERN STACK ENGINER........ </span></li>
    
    </ul>
   <img src="azn.jpg" alt="" />
    </div>
    </>
     
   
  )
}

export default About;