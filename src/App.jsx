import React from "react";
import UserProfile from "./components/UserProfile";

const App = () => {
  return (
    <div style={{ 
      minHeight: "100vh", 
      padding: "20px",
    }}>
      <h1 style={{ 
        textAlign: "center", 
        color: "black",
        marginBottom: "40px",
        fontSize: "2.5rem",
        textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
      }}>
        STACC GITHUB 101
      </h1>
      
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "24px",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 20px"
      }}>
        <UserProfile name="Akshay" image="/images/akshay.jpg">
          Msc AI 2nd year
        </UserProfile>
        
        <UserProfile name="Ramees" image="/images/ramees.jpg">
          Msc AI 1st year
        </UserProfile>
        
        <UserProfile name="Vineeth" image="IMG_20230812_103346 (1).jpg">
          Mca 1st year
        </UserProfile>
        
        <UserProfile name="GhanShyam" image="/images/ramees.jpg">
          Msc AI 1st year
        </UserProfile>
        
        <UserProfile name="Billy" image="/images/ramees2.jpeg">
          Msc AI 1st year
        </UserProfile>
        
        <UserProfile name="Elon" image="/images/ramees2.jpeg">
          Msc AI 1st year
        </UserProfile>
        
        <UserProfile name="Gopika" image="/images/1397596.jpg">
          MCA 1st year
        </UserProfile>

        <UserProfile name="Abhishek" image="/images/rdj.jpg">
          MCA 1st year
        </UserProfile>
        
        <UserProfile name="Jeswin" image="/images/ramees2.jpeg">
          Msc AI 1st year
        </UserProfile>
        
        <UserProfile name="Aditya R Nair" image="/images/Aditya at IITMM.jpg">
          Integrated MCA
        </UserProfile>
      </div>
    </div>
  );
};

export default App;
