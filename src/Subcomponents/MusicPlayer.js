import React from 'react';
import { IoShuffleOutline, IoPlayCircleOutline, IoPlaySkipBackOutline, IoPlaySkipForwardOutline, IoRepeat } from 'react-icons/io5';

const MusicPlayer = props => {
  return (
    <div>
      <div style={styles.controls}>
        <IoShuffleOutline style={styles.dial}/>
        <IoPlaySkipBackOutline style={styles.dial}/>
        <IoPlayCircleOutline style={{fontSize: 64}}/>
        <IoPlaySkipForwardOutline style={styles.dial}/>
        <IoRepeat style={styles.dial}/>
      </div>
    </div>
  )
}

const styles = {
  container: {
    height: 300
  },
  controls: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 15,
    width: "88%",
    marginLeft: 19,
    margnTop: 15,
    borderTop: 'solid white'
  },
  dial: {
    fontSize: 26,
    marginTop: 18,
    marginLeft: 20,
    marginRight: 20
  }
}

export default MusicPlayer;
