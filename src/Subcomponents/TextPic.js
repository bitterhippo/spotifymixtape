import React from 'react';
import '../App.css';

function TextPic(props) {
  console.log(props)
  return (
    <div id="imagecontainer">
      <img src={ props.props[0] } style={styles.img}/>
      <div>{ props.props[1] }</div>
    </div>
  )
}

const styles = {
  img : {
    height: 125,
    width: 125
  }
}



export default TextPic;