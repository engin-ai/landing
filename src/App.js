import React from 'react';
import logo from './logo.svg';
import Homepage from './Homepage';
import Navbar from './Navbar';
import { Responsive, Menu } from 'semantic-ui-react';
import './App.css';
import BackgroundImage from "./images/JP_Clipboard_Image.png"


function App() {
  return (
    <div style={{"overflow":"hidden"}}>
      <div className="App">
      <Navbar ></Navbar>
      <header className="App-header">
        <Homepage>
          
        </Homepage>
      </header>
    </div>
    </div>
      
    
  );
}

export default App;
