import React from "react";
import { IoArrowBackOutline, IoEllipsisHorizontalSharp } from "react-icons/io5";

const BackArrowEllipses = props => {
  return (
    <div style={styles.container}>
      <IoArrowBackOutline style={{fontSize: 300}} />
      <IoEllipsisHorizontalSharp />
    </div>
  )
}

const styles = {
  container: {
    width: '100%',
    marginLeft: 100
  }
}

export default BackArrowEllipses;