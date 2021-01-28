import React from 'react';
import '../App.css';
//Presnetation Components
import StatusBar from './StatusBar';
import Footer from './Footer';
import SongTabs from './SongTabs';

const Viewscreen = props => {

  const songInfo = [["Rap.jpg","Living Gud"],["Rock.jpg","Tacco Truck"],["Soul.jpeg","Sweating This Sweater"],["note.png","Licorice Alice"],["Soul.jpeg","Exciter"],["RnB.jpg","Strolling On The Moon"]]

  return (
    <div id='viewscreen'>
      <StatusBar />
      <h1 style={styles.header}>Good Evening</h1>
      <Footer />
      <div style={styles.tabBox}>
        {songInfo.map((x,y) => <SongTabs key={y}
        props={{img:x[0],text:x[1]}}
        />)}
      </div>
      <div style={styles.message}>
        <h2>Your Mixtape</h2>
        <p>You bring the magic, we'll do the heavy lifting.</p>
      </div>
    </div>
  )
}

const styles = {
  header: {
    marginTop: 20,
    fontWeight: 16
  },
  tabBox: {
    display: "flex",
    flexDirection: "inline-flex",
    flexWrap: "wrap",
    gap: 5,
    marginTop: 25
  },
  message: {
    marginTop: 25
  }
}

export default Viewscreen;