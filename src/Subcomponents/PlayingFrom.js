import React from "react";
import { IoArrowDownCircleSharp, IoEllipsisHorizontalSharp } from "react-icons/io5";

const PlayingFrom = props => {
  return (
    <div style={styles.listItems}>
      <IoArrowDownCircleSharp />
      <div style={styles.text}>
        <span style={styles.title}>PLAYING FROM MIXTAPE</span> <br></br>
        <span style={styles.tapeName}>MixTape #1</span>
      </div>
      <IoEllipsisHorizontalSharp />
    </div>
  )
}

const styles = {
  listItems: {
    display: "flex",
    flexDirection: "inline-flex",
    justifyContent: "space-between",
    marginLeft: 55,
    marginRight: 55,
    marginTop: 15
  },
  text: {
    fontSize: 12
  },
  tapeName: {
    marginLeft: 45
  },
  title: {
    opacity: 0.64
  }
}

export default PlayingFrom;