import React from "react";

const SongPic = props => {
  return (
    <div style={styles.songBox}>
      <img style={styles.img} src={props.props.img}/>
      <p style={styles.text}>{props.props.text}</p>
    </div>
  )
}

const styles = {
  songBox: {
    display: "flex",
    flexDirection: "column",
    width: 110,
    marginTop: 10
  },
  text: {
    textAlign: "center",
    marginTop: 5
  },
  img: {
    height: 110,
    borderRadius: 10
  }
}

export default SongPic;