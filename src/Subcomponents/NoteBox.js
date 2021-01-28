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
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: "5px"
  },
  img: {
    height: "100%",
    width: "100%",
  }
}



export default NoteBox;