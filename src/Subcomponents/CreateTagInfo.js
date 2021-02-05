import React from 'react';
import '../App.css';
import '../index.css';




function CreateTagInfo() {

  return (
      <div style={styles.infoBox}>
        <h1>New Mixtape</h1>
        <p>Pick tags based on genre, mood, occasion and more and let Spotify handle the heavy lifting.</p>
        <br></br>
        <h3>Get started by adding tags</h3>
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
  }
}



export default CreateTagInfo;