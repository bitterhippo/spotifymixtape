import React from 'react';
import '../App.css';

const NoteBox = props => {
  return (
    <div style={styles.noteBox}>
      <img style={styles.img} src={props.props.img} />
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
  },
  img: {
    height: "100%",
    width: "100%",
    borderRadius: "5px",
    borderStyle: "black"
  }
}



export default NoteBox;