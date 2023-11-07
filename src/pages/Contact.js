import React from 'react'
import Heading from "../components/Heading"
import { Link } from 'react-router-dom';


function Contact(){
return (
  
    <div>
    
   <h2> HEY! This Is Contact Page</h2>
    <Heading title="Contact" />
    <div class="card" style={{textAlign:"center",width: "300px", justifyContent:"center", alignItems:"center",marginLeft:"300px", marginTop:"10px"}}>
  <img src="azn.jpg" class="card-img-top" alt="..."/>
  <div class="card-body ">
    <h5 class="card-title">AZLAN MALIK </h5>
    <p><strong>I AM A REACT DEVELOPER</strong></p>
    
  
    <Link to="/about" class="btn btn-primary">ABOUT ME.</Link>
  </div>

 


   </div>
   <div class="card" style={{textAlign:"center",width: "300px", justifyContent:"center", alignItems:"center",marginLeft:"300px", marginTop:"10px"}}>
   <img src="azn.jpg"class="card-img-top" alt="..."/>
   <div class="card-body ">
     <h5 class="card-title">AZLAN MALIK </h5>
     <p><strong>I AM A REACT DEVELOPER</strong></p>
     
       <Link to="/about" class="btn btn-primary">ABOUT ME.</Link>
   </div>
 
  
 
 
    </div>
   </div>
   
   
   

  )
}

export default Contact;
