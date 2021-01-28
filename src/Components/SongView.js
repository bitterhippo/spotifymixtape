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
      <NoteBox/>
      <div style={styles.playerBox}>
        <div style={styles.songTitle}>
          {data.song}
          <audio controls style={styles.player}>
            <source src="horse.ogg" type="audio/ogg" />
            <source src="horse.mp3" type="audio/mpeg" />
          </audio>
        </div>
        <div style={styles.songTagsContainer}>
          <b>TAGS</b>
          <div style={styles.songTags}>
            {data.tags.map((x, y) => <Tagged key={y} props={[x]} />)}
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
    marginLeft: 5
  },
  player : {
    marginLeft: 30,
    marginTop: 30
  },
  songTitle: {
    fontSize: 20,
    fontWeight: "bold"
  },
  songTagsContainer: {
    marginTop: 60,
    fontSize: 20,
  },
  songTags: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
    fontSize: 16
  }
}







export default SongView;