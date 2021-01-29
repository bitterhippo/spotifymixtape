import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
//Presnetation Components
import StatusBar from './StatusBar';
import Footer from './Footer';
import SongTabs from './SongTabs';
import SongPic from './SongPic';

const Viewscreen = props => {

  const songInfo = [["Rap.jpg", "Living Gud"], ["Rock.jpg", "Tacco Truck"], ["Soul.jpeg", "Sweating This Sweater"], ["note.png", "Licorice Alice"], ["Soul.jpeg", "Exciter"], ["RnB.jpg", "Strolling On The Moon"]]

  return (
    <div id='viewscreen'>
      <StatusBar />
      <h1 style={styles.header}>Good Evening</h1>
      <Footer />
      <div style={styles.tabBox}>
        {songInfo.map((x, y) => <SongTabs key={y}
          props={{ img: x[0], text: x[1] }}
        />)}
      </div>
      <div style={styles.message}>
        <h2>Your Mixtape</h2>
        <p>You bring the magic, we'll do the heavy lifting.</p>
        <div style={styles.tapeLink}>
          <Link 
          style={styles.tapeLinkText} 
          to="/Newtapes">Create Mixtape</Link>
        </div>
      </div>
      <div style={styles.played}>
        <h2>Recently Played</h2>
        <div style={styles.songPics}>
          <SongPic props={{ img: 'Rock.jpeg', text: 'TEST' }} />
          <SongPic props={{ img: 'Rock.jpeg', text: 'TEST' }} />
          <SongPic props={{ img: 'Rock.jpeg', text: 'TEST' }} />
        </div>
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
  },
  playedBox: {
    display: "flex",
    flexDirection: "inline-flex",
  },
  songPics: {
    display: "inline-flex",
    marginLeft: 15,
    gap: 5,
    marginTop: 15,
    height: 150,
  },
  tapeLink: {
    display: "flex",
    marginTop: 25,
    justifyContent: "center",
    backgroundColor: "rgb(29 185 84)",
    height: 40,
    width: 250,
    borderRadius: 30,
    marginLeft: 50,
  },
  tapeLinkText: {
    textAlign: "center",
    verticalAlign: "center",
    marginTop: 10,
    textDecoration: "none",
    color: "white"
  },
  played: {
    marginTop: 40
  }
}

export default Viewscreen;