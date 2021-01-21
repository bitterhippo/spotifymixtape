import React from 'react';
import '../App.css';

function TextPic(props) {
  console.log(props)
  return (
    <div style={styles.container}>
      <img onClick={props.onClick} data-value={props.props[1]} src={ props.props[0] } style={styles.img}/>
      <div style={styles.text}>{ props.props[1] }</div>
    </div>
  )
}

const styles = {
  container: {
    position: "relative",
    color: "white",
    height: 100,
    width: 100
  },
  img : {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  text : {
    fontSize: 30,
    top: "40%",
    left: "40%",
    position: "absolute",
    color: 'white'
  }
}




export default TextPic;