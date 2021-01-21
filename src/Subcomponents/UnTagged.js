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
    marginLeft: '100'
  },
  text : {
    color: 'grey',
    borderStyle: "solid",
    borderRadius: '25px',
    width: "100%",
  }
}

export default Untagged;