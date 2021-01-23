import React from 'react';
import '../App.css';





const StatusBar = props => {

  return (
      <div id='status-bar'>
        <div style={styles.timer}>{ new Date().toLocaleTimeString()}</div>
        <div id='status-bar-images'>
        </div>
    </div>
  )
}

const styles = {
  timer :{
    marginLeft: 10,
    marginTop: 5
  }
}

export default StatusBar;