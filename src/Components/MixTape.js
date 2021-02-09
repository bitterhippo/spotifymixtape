import React from 'react';
import '../App.css';
import StatusBar from '../Subcomponents/Footer';
import Footer from '../Subcomponents/StatusBar';
import NoteBox from '../Subcomponents/NoteBox';
import SongBox from '../Subcomponents/SongBox';
import Player from "../Subcomponents/Player";
import { IoHeartOutline, IoEllipsisHorizontalSharp } from 'react-icons/io5';


class MixTape extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (
      <div>
        <div id='viewscreen'>
          <StatusBar />
          <Footer />
          <NoteBox props={{ img: "musicstore.jpg" }} />
          <div style={styles.infoBox}>
            <div style={styles.tapeName}>
              Mixtape #1
            </div>
            <div style={styles.follow}>
              FOLLOW
            </div>
            <div style={styles.text}>
              Generated by <b>Ruby F00</b>
            </div>
            <div style={styles.text}>
              <b>Tags</b>: {this.props.location.state.testValue.join(', ')}
            </div>
          </div>
          <Player />
          <div style={styles.songList}>
            <div style={styles.songListBox}>
              <SongBox props={{
                img: 'Funk.jpeg',
                songName: 'Waiting 4 Eva',
                artist: 'Ruby f00 Krew',
                tags: [...this.props.location.state.testValue]
              }}
              />
              <div style={styles.songListBoxIcons}>
                <IoHeartOutline style={{fontSize: 19}}/><IoEllipsisHorizontalSharp />
              </div>
            </div>
            <div style={styles.songListBox}>
              <SongBox props={{
                img: 'Punk.jpeg',
                songName: `It Took Too Long`,
                artist: 'Da Snow Blowah',
                tags: [...this.props.location.state.testValue]
              }} />
              <div style={styles.songListBoxIcons}>
                <IoHeartOutline style={{fontSize: 19}}/><IoEllipsisHorizontalSharp />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  infoBox: {
    position: "absolute",
    top: "44%",
    left: "25%",
    textAlign: "center",
    height: 100,
    width: 200
  },
  follow: {
    marginLeft: 40,
    textAlign: "center",
    marginTop: 15,
    color: "rgb(130,130,130)",
    borderStyle: "solid",
    borderRadius: '25px',
    width: "55%"
  },
  text: {
    marginTop: 10,
    fontSize: 12
  },
  tapeName: {
    fontSize: 28,
  },
  songList: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    bottom: "5%",
    marginLeft: 23,
  },
  songListBox: {
    display: "flex",
    justifyContent: "space-between",
  },
  songListBoxIcons: {
    display: 'inline-flex',
    marginLeft: 25,
    gap: 15
  }
}

export default MixTape;
