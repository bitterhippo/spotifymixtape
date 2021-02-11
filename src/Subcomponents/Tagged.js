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
    marginTop: 10
  },
  text :{
    color: 'green',
    borderStyle: "solid",
    borderRadius: '25px',
    borderWidth: 2,
    width: "100%",
  }
}

export default Tagged;