import React from 'react';
import '../App.css';
import '../index.css';




function CreateTagInfo() {

  return (
      <div style={styles.infoBox}>
        <h1>New Mixtape</h1>
        <p style={styles.started}>Pick tags based on genre, mood, occasion and more and let Spotify handle the heavy lifting.</p>
        <br></br>
        <h1 style={styles.started}>Get started by adding tags</h1>
    </div>
  )
}

const styles = {
  infoBox : {
    fontFamily: 'MyFont',
    position: "absolute",
    marginTop: "290px",
    marginLeft: "35px",
    width: "80%",
    height: "20%",
    textAlign: "center"
  },
  started: {
    fontSize: 16
  }
}



export default CreateTagInfo;