import React from 'react';
import '../App.css';
import StatusBar from '../Subcomponents/Footer';
import Footer from '../Subcomponents/StatusBar';
import NoteBox from '../Subcomponents/NoteBox';
import CreateTagInfo from '../Subcomponents/CreateTagInfo';
import SongPic from "../Subcomponents/SongPic";
import { Link } from "react-router-dom";

function Newtapes() {
  return (
    <div>
      <div id='viewscreen'>
        <StatusBar />
        <NoteBox props={{ img: "rave.jpg" }} />
        <CreateTagInfo />
        <div style={styles.imgBox}>
          <SongPic props={{ img: "pop.jpeg", text: "Pop" }} />
          <SongPic props={{ img: 'RnB.jpg', text: 'Rap' }} />
        </div>
        <div style={styles.tapeLink}>
          <Link
            style={styles.tapeLinkText}
            to="/SelectTags">Add Tags</Link>
        </div>
        <Footer />
      </div>
    </div>
  );
}

const styles = {
  imgBox: {
    display: "flex",
    flexDirection: "inline-flex",
    gap: 50,
    position: "absolute",
    bottom: "20%",
    left: "15%"
  },
  tapeLink: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "white",
    height: 40,
    width: 200,
    borderRadius: 30,
    marginLeft: 90,
    position: "absolute",
    bottom: "11%"
  },
  tapeLinkText: {
    textAlign: "center",
    verticalAlign: "center",
    marginTop: 10,
    textDecoration: "none",
    color: "black",
  }
}

export default Newtapes;
