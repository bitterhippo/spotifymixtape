import React from 'react';
import '../App.css';

const SongBox = props => {
  console.log(props)

  return (
    <div style={styles.row}>
      <img src={props.img}></img>
      <span style={styles.text}>LOL</span>
    </div>
  )
}

const styles = {
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  img: {
    height: '125',
    width: '125'
  },
  text: {
    color: 'green'
  },
  icons: {

  }
}

export default SongBox;

