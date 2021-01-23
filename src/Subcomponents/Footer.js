import React from 'react';
import '../App.css';

const Footer = props => {
  return (
    <div style={styles.footer}>
      <div style={styles.home}>
        Home
      </div>
      <div style={styles.link}>
        Next
      </div>
    </div>
  )
}

const styles = {
  footer: {
  marginTop: "90px",
  height: 50,
  width: "375px",
  backgroundColor: "rgb(40, 40,40)",
  position: "absolute",
  bottom: 0,
  display: "inline-flex",
  justifyContent: "space-between",
  borderRadius: "5px",
  },
  link : {
    marginRight: 10,
    marginTop: 10
  },
  home: {
    marginLeft: 10,
    marginTop: 10
  }
}




export default Footer;