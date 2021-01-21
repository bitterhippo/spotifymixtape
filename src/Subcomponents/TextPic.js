import React from 'react';
import '../App.css';

function TextPic(props) {
  return (
    <div style={styles.container}>
      <img alt="" onClick={props.onClick} data-value={props.props[1]} src={props.props[0]} style={styles.img} />
      <p style={styles.text}>{props.props[1]}</p>
    </div>
  )
}

const styles = {
  container: {
    position: "relative",
    textAlign: "center",
    height: 100,
    width: 100
  },
  img: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  text: {
    fontSize: 20,
    position: "absolute",
    color: 'white',
    top: "35%",
    left: "80%"
  }
}




export default TextPic;