import React from 'react';
import '../App.css';
//Presnetation Components
import NewMixTapes from './NewMixTape';
import StatusBar from './StatusBar';
import Footer from './Footer';



function Viewscreen() {

  return (
    <div id='viewscreen'>
      <StatusBar />
      <h1>Good Evening</h1>
      <NewMixTapes />
      <Footer />
    </div>
  )
}


export default Viewscreen;