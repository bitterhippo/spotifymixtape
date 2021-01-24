import React from 'react';
import '../App.css';

function NoteBox() {

  return (
    <div style={styles.noteBox}>
      NoteBox
    </div>
  )
}

const styles = {
  noteBox : {
    position: `absolute`,
    marginTop: `30px`,
    marginLeft: `60px`,
    width: 250,
    height: 250,
    backgroundColor: `green`
  }
}



export default NoteBox;