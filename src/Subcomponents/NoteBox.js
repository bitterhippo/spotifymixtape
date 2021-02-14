import React from 'react';
import '../App.css';

const NoteBox = props => {
  return (
    <div style={styles.noteBox}>
      <img alt={styles.img} style={styles.img} src={props.props.img} />
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
  },
  img: {
    height: "100%",
    width: "100%",
    borderRadius: 10
  }
}



export default NoteBox;