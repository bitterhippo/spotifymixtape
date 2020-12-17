import React from 'react';
import '../App.css';
//Presnetation Components
import MixTapes from './MixTapes';
import NewMixTapes from './NewMixTape';
import RecentlyPlayed from './RecentlyPlayed';
import StatusBar from './StatusBar';
import Footer from './Footer';



function Viewscreen() {

  return (
    <div id='viewscreen'>
      <StatusBar />
      <h1>Good Evening</h1>
      <MixTapes />
      <NewMixTapes />
      <RecentlyPlayed />
      <Footer />
    </div>
  )
}


export default Viewscreen;