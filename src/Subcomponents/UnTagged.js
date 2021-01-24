import React from 'react';

const Untagged = props => {
  return (
    <div style={styles.container}>
      <p style={styles.text}>Add New Tags</p>
    </div>
  )
}

const styles = {
  container : {
    width: '100px',
    textAlign: "center",
    marginLeft: '100',
    marginTop: 15
  },
  text : {
    color: "rgb(130,130,130)",
    borderStyle: "solid",
    borderRadius: '25px',
    width: "100%",
  }
}

export default Untagged;