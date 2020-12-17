import React from 'react';
import '../App.css';

function TextPic(props) {
  console.log(props)
  return (
    <div id="imagecontainer">
      <img src={ props.props[0] } height="125" width="125" />
      <div>{ props.props[1] }</div>
    </div>
  )
}





export default TextPic;