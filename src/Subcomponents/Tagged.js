import React from 'react';

const Tagged = props => {
  return (
    <div style={styles.container}>
      <p style={styles.text}>{props.props[0]}</p>
    </div>
  )
}

const styles = {
  container : {
    width: '75px',
    textAlign: "center",
    marginLeft: '100'
  },
  text :{
    color: 'white',
    backgroundColor: 'green',
    borderRadius: '25px',
    width: "100%",
  }
}

export default Tagged;