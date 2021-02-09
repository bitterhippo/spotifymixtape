import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { IoHomeOutline, IoSearchOutline, IoLibraryOutline } from "react-icons/io5";

const Footer = props => {

  console.log(props.props)

  return (
    <div style={styles.footer}>
      <div style={styles.nameBox}>
        <Link style={styles.link} to="/">
          <IoHomeOutline
            style={styles.home} />
        </Link>
        Home
      </div>
      <div style={styles.nameBox}>
        <IoSearchOutline
          style={styles.search}
        />
        Search
      </div>
      <div style={styles.nameBox}>
        <IoLibraryOutline
          style={styles.library}
        />
        Library
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
  link: {
    textDecoration: "none",
    color: "white"
  },
  home: {
    fontSize: "25px",
    marginTop: 5
  },
  library: {
    fontSize: "25px",
    marginTop: 5,
    marginLeft: 3
  },
  search: {
    fontSize: "25px",
    marginTop: 6
  },
  nameBox: {
    display: "flex",
    flexDirection: "column",
    fontSize: 11,
    marginLeft: 50,
    marginRight: 50
  }
}




export default Footer;