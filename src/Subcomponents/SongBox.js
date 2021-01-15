import React from 'react';
import '../App.css';


const SongBox = props => {
  console.log(props)

  return (
    <div style={styles.row}>
      <div>
        <img src={props.props.img} style={styles.img}/>
      </div>
      <div style={styles.text}>
        <span style={styles.songName}>Song: {props.props.songName} <br></br></span>
        <span style={styles.artist}>By: {props.props.artist}</span>
      </div>
    </div>
  )
}

const styles = {
  row: {
    display: 'flex'
  },
  img: {
    height: 75,
    width: 75
  },
  text: {
    height: 75,
    width: 200,
    justifyContent: 'center',
    textAlign: 'center'
  },
  songName: {
    fontSize: 18
  },
  artist: {
    fontSize: 12,
    color: 'grey'
  }
}

export default SongBox;

