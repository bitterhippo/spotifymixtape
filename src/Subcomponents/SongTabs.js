import React from "react";

const SongTabs = props => {
  return (
    <div style={styles.container}>
      <div>
        <img style={styles.img} src={props.props.img}></img>
      </div>
      <div style={styles.textBox}>
        <p style={styles.text}> {props.props.text} </p>
      </div>
    </div>
  )
}

const styles = {
  img: {
    width: 50,
    height: 50,
    borderRadius: 5
  },
  textBox: {
    backgroundColor: 'rgb(44 44 44)',
    height: 50,
    width: 115,
    textAlign: "center",
    borderRadius: 5
  },
  text: {
    marginTop: 15,
  },
  container: {
    display: "flex",
    flexDirection: "inline-flex",
  }
}

export default SongTabs