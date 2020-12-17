import React from 'react';
import '../App.css';





function StatusBar() {

  return (
      <div id='status-bar'>
        <div>{ new Date().toLocaleTimeString()}</div>
        <div id='status-bar-images'>
        </div>
    </div>
  )
}





export default StatusBar;