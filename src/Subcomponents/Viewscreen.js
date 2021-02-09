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
        <h2 style={styles.test}>Your Mixtape</h2>
        <p>You bring the magic, we'll do the heavy lifting.</p>
        <div style={styles.tapeLink}>
          <Link 
          style={styles.tapeLinkText} 
          to="/Newtapes">Create Mixtape</Link>
        </div>
      </div>
      <div style={styles.played}>
        <h2 style={styles.headerTwo}>Recently Played</h2>
        <div style={styles.songPics}>
          <SongPic props={{ img: 'Rock.jpeg', text: 'Birbs N Bros' }} />
          <SongPic props={{ img: 'rave.jpg', text: 'Lost on the Dock' }} />
          <SongPic props={{ img: 'Punk.jpeg', text: 'Lit 4 Lyfe' }} />
        </div>
      </div>
    </div>
  )
}

const styles = {
  header: {
    marginTop: 20,
    fontWeight: 16,
    marginLeft: 25,
    fontFamily: "Circular Sp UI v3 T Book"
  },
  tabBox: {
    display: "flex",
    flexDirection: "inline-flex",
    flexWrap: "wrap",
    gap: 3,
    marginTop: 25,
    marginLeft: 15,
    columnGap: 10
  },
  message: {
    marginTop: 25,
    marginLeft: 25,
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
    marginLeft: 40,
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
  },
  headerTwo: {
    marginLeft: 25
  },
}

export default Viewscreen;