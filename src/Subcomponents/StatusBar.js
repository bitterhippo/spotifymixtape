import React from 'react';
import '../App.css';
import { IoBatteryFull, IoBarChart, IoWifi } from "react-icons/io5";


const StatusBar = props => {

  return (
    <div style={styles.statusBar}>
      <div style={styles.timer}>
        {new Date().toLocaleTimeString()}
      </div>
      <div style={styles.items}>
        <IoBarChart />
        <IoWifi />
        <IoBatteryFull />
      </div>
    </div>
  )
}

const styles = {
  statusBar: {
    display: "flex",
    flexDirection: "inline-flex",
    justifyContent: "space-between",
    backgroundColor: "rgb (153, 153, 153)"
  },
  timer: {
    marginLeft: 40,
    marginTop: 5
  },
  items: {
    display: "flex",
    marginTop: 5,
    marginRight: 20,
    gap: 3,
    fontSize: 18
  }
}

export default StatusBar;