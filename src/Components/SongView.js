import React from "react";
import '../App.css';
import Footer from '../Subcomponents/Footer';
import StatusBar from '../Subcomponents/StatusBar';
import NoteBox from '../Subcomponents/NoteBox';
import Tagged from '../Subcomponents/Tagged';

const SongView = props => {

  const data = props.location.state

  console.log(data)
  
  return (
    <div id="viewscreen">
      <Footer />
      <StatusBar />
      <NoteBox />
      <div style={styles.playerBox}>
        <div style={styles.songTitle}>
          {data.song}
        </div>
        <div style={styles.songTags}>
          TAGS <br />
          {data.tags.map((x,y) => <Tagged key={y} props={[x]} />)}
        </div>
      </div>
    </div>
  )
}

const styles = {
  playerBox : {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "50%",
    backgroundColor: "red",
    width: "100%",
    marginLeft: 55,
  },
  songTitle: {
    fontSize: 20
  },
  songTags : {
    marginTop: 100,
    display: "flex",
    gap: 10
  }
}







export default SongView;