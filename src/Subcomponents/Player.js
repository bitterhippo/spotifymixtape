import React from "react";
import '../App.css';

const Player = props => {
  return (
    <div style={styles.player}>
      <div style={styles.shuffler}>
        <figure>
          <button name="play"></button>
        </figure>
        <div style={styles.shuffler2}>
          Shuffle Play
        </div>
      </div>
      <div style={styles.toggle}>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <div style={styles.toggle2}>
          Show Liked Songs
        </div>
      </div>
    </div>
  )
}

const styles = {
  player: {
    display: "inline-flex",
    justifyContent: "space-between",
    position: "absolute",
    width: "90%",
    marginLeft: 20,
    bottom: "30%",
    height: 45
  },
  shuffler: {
    display: "inline-flex",
  },
  shuffler2: {
    marginLeft: 11,
    marginTop: 17,
  },
  toggle: {
    display: "inline-flex",
    flexDirection: "row-reverse",
    marginTop: 7,
  },
  toggle2: {
    fontSize: 12,
    marginTop: 12,
    marginRight: 5
  }
};

export default Player;