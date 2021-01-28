import React from "react";

const SongPic = props => {
  return (
    <div style={styles.songBox}>
      <img src={props.props.img}/>
      <p style={styles.text}>{props.props.text}</p>
    </div>
  )
}

const styles = {
  songBox: {
    display: "flex",
    flexDirection: "column",
    height: 120,
    width: 120,
    marginTop: 10
  },
  text: {
    textAlign: "center",
    marginTop: 5
  }
}

export default SongPic;