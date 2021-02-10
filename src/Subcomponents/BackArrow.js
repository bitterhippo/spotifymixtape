import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";

const BackArrow = props => {
  return (
    <div style={styles.container}>
      <IoArrowBackOutline style={{ fontSize: 20 }} />
    </div>
  )
}

const styles = {
  container: {
    width: '100%',
    marginLeft: 15,
    display: 'flex',
    flexDirection: 'inline-flex',
    justifyContent: 'space-between',
    position: 'absolute',
    top: '4%'
  }
}

export default BackArrow;