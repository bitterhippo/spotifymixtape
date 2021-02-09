import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const SongBox = props => {

  console.log(props)

  return (
    <div style={styles.row}>
      <div>
        <img alt="" src={props.props.img} style={styles.img} />
      </div>
      <div style={styles.text}>
        <span style={styles.songName}>
          <Link style={ styles.songListBoxLink }
            to={{
              pathname: "/SongView",
              state: {
                tags: [props.props.tags],
                song: props.props.songName,
                artist: props.props.artist,
                img: 'insert img here'
              }
            }} >
            {props.props.songName}
          </Link>
          <br></br></span>
        <span style={styles.artist}>{props.props.artist}</span>
      </div>
    </div>
  )
}

const styles = {
  row: {
    display: 'flex'
  },
  img: {
    height: 50,
    width: 50
  },
  text: {
    height: 75,
    width: 200,
    justifyContent: 'center',
    marginLeft: 10,
  },
  songName: {
    fontSize: 14
  },
  artist: {
    fontSize: 12,
    color: 'grey'
  },
  songListBoxLink: {
    textDecoration: "none",
    color: "white"
  }
}

export default SongBox;

