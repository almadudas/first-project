import React from 'react';
import './App.css';
import { GrSearch } from "react-icons/gr";
import { AiOutlineUnorderedList } from "react-icons/ai";


function App() {
    const myStyle={
        backgroundImage: 
 "url('background.jpg')",
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
      <div style={myStyle}>
        <h3 style={{textAlign: "center"}}> Sibiu, Romania</h3>
        <GrSearch class="search"/> 
        <AiOutlineUnorderedList class="list"/>
        <img src="sunwclouds.png"  class="center" alt=""/>
      </div>
    );
  
}
   
export default App;