import React from 'react';
import '../App.css';
import StatusBar from '../Subcomponents/Footer';
import Footer from '../Subcomponents/StatusBar';
import NoteBox from '../Subcomponents/NoteBox';
import CreateTagInfo from '../Subcomponents/CreateTagInfo';
import TextPic from '../Subcomponents/TextPic';
import SongPic from "../Subcomponents/SongPic";

function Newtapes () {
  return (
    <div>
      <div id='viewscreen'>
        <StatusBar />
        <NoteBox props={{img: "rave.jpg"}}/>
        <CreateTagInfo />
          <div style={styles.imgBox}>
            <SongPic props={{img:"pop.jpeg",text:"lol"}} />
            <SongPic props={['Pop.jpeg', 'Pop']} />
          </div>
        <Footer />
      </div>
    </div>
  );
}

const styles = {
  imgBox : {
    display: "flex",
    flexDirection: "inline-flex",
    gap: 50,
    position: "absolute",
    bottom: "15%",
    left: "15%"
  }
}


export default Newtapes;
