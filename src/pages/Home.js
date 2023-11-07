import React from 'react'
import ImgComponent from "../components/ImgComponent"


const Home = () => {
  return (
    <div>
    <h2>HEY! My General Website TO Visit.</h2>
    <div className="wrapper">
    <div className="static-text">I'M A</div>
    <ul className="dynamic-text">
    <li><span>Javascript DEVELOPER....</span></li>
    <li><span>React DEVELOPER...</span></li>
      <li><span>MERN STACK ENGINER..... </span></li>
    
    
    </ul>
    </div>

   <ImgComponent />
    </div>
  )
}

export default Home;
