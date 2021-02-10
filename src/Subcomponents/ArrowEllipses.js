import React from "react";
import { IoArrowBackOutline, IoEllipsisHorizontalSharp } from "react-icons/io5";

const BackArrowEllipses = props => {
  return (
    <div style={styles.container}>
      <IoArrowBackOutline style={{fontSize: 20, marginLeft: 15}} />
      <IoEllipsisHorizontalSharp style={{fontSize: 20, marginRight: 15}}/>
    </div>
  )
}

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'inline-flex',
    justifyContent: 'space-between',
    position: 'absolute',
    top: '4%'
  }
}

export default BackArrowEllipses;