import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Footer = props => {

  console.log(props.props)
  
  return (
    <div style={styles.footer}>
      <div style={styles.home}>
        <Link style={styles.link} to="/">Home</Link> 
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
    justifyContent: "center",
    borderRadius: "5px",
  },
  linkBox: {
    marginRight: 25,
    marginTop: 10,
  },
  link: {
    textDecoration: "none",
    color: "white"
  },
  home: {
    marginTop: 10
  }
}




export default Footer;