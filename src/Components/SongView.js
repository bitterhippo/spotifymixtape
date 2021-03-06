import React from "react";
import '../App.css';
import Footer from '../Subcomponents/Footer';
import StatusBar from '../Subcomponents/StatusBar';
import NoteBox from '../Subcomponents/NoteBox';
import Tagged from '../Subcomponents/Tagged';
import PlayingFrom from '../Subcomponents/PlayingFrom';
import MusicPlayer from '../Subcomponents/MusicPlayer';
import SongDuration from '../Subcomponents/SongDuration';

const SongView = props => {

  const data = props.location.state

  return (
    <div id="viewscreen">
      <Footer />
      <StatusBar />
      <PlayingFrom />
      <SongDuration />
      <NoteBox props={{img: "rave.jpg"}}/>
      <div style={styles.playerBox}>
        <div style={styles.songTitle}>
          <span style={styles.songTitle}>{data.song} <br></br></span>
          <span style={styles.artistName}>{data.artist}</span>
        </div>
        <MusicPlayer />
        <div style={styles.songTagsContainer}>
          <b>Tags</b>
          <div style={styles.songTags}>
            {data.tags.map((x, y) => 
            <Tagged key={y} props={[x]} 
            />)}
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  playerBox: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "50%",
    backgroundColor: "",
    width: "100%",
    marginLeft: 5,
    marginTop: 15
  },
  player : {
    marginLeft: 15,
    marginTop: 30
  },
  songTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10
  },
  songTagsContainer: {
    marginTop: 30,
    fontSize: 20,
    marginLeft: 15
  },
  songTags: {
    marginLeft: -30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    fontSize: 16,
    marginTop: 15,
  },
  artistName : {
    color: "grey",
    fontSize: 14,
    marginLeft: 10
  }
}

export default SongView;