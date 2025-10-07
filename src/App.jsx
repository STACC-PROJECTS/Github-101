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
      <UserProfile name="Billy" image="/images/ramees2.jpeg" >
        Msc AI 1st year
          </UserProfile>
                
 <UserProfile name="Aditya R Nair" image="/images/Aditya at IITMM.jpg" >
        Integrated MCA
          </UserProfile>

    </div>
</center>
    
    
  </>
  );
};export default App;
