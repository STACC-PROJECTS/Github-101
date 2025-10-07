import React from "react";
import UserProfile from "./components/UserProfile"


const App = () => {
  return (
    <>
    
    
    

  <center>  <h1> STACC GITHUB 101 </h1> 
    
    
     <div  >
    
      
      <UserProfile name="Akshay" image= "/images/akshay.jpg">
        Msc AI 2nd year           
         </UserProfile>     
          
      <UserProfile name="Ramees" image="/images/ramees.jpg" >
        Msc AI 1st year
          </UserProfile>

        <UserProfile name="GhanShyam" image="/images/ramees.jpg" >
        Msc AI 1st year
          </UserProfile>
                
 

    </div>
</center>
    
    
  </>
  );
};export default App;
