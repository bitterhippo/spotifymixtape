import React from 'react';
import '../App.css';





function CreateTagInfo() {

  return (
      <div style={styles.infoBox}>
        <h1>New Mixtape</h1>
        <h4>Pick tags based on genre, mood, occasion and more and let Spotify handle the heavy lifting.</h4>
        <h4>Get started by adding tags</h4>
    </div>
  )
}

const styles = {
  infoBox : {
    position: "absolute",
    marginTop: "325px",
    marginLeft: "35px",
    width: "80%",
    height: "20%",
    textAlign: "center"
  }
}



export default CreateTagInfo;