import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { IoHomeOutline, IoSearchOutline, IoLibraryOutline } from "react-icons/io5";

const Footer = props => {

  console.log(props.props)

  return (
    <div style={styles.footer}>
      <Link style={styles.link} to="/">
        <IoHomeOutline
          style={styles.home} />
      </Link>
      <IoSearchOutline
        style={styles.search}
      />
      <IoLibraryOutline
        style={styles.library} />
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
  link: {
    textDecoration: "none",
    color: "white"
  },
  home: {
    fontSize: "25px",
    marginRight: 90,
    marginTop: 10
  },
  library: {
    fontSize: "25px",
    marginTop: 10,
    marginLeft: 90
  },
  search: {
    fontSize: "25px",
    marginTop: 10
  }
}




export default Footer;