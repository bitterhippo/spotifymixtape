import React from 'react';
import '../App.css';


const SongBox = props => {
  console.log(props)

  return (
    <div style={styles.row}>
      <div>
        <img src="Funk.jpeg" style={styles.img}/>
      </div>
      <div>
        <span>LOL</span>
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
    color: 'green',
    margin: '10px',
    padding: '10px'
  },
  icons: {

  }
}

export default SongBox;

