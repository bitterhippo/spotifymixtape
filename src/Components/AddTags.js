import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Presentational Components



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      selected: []
    }

    this.onClick = this.onClick.bind(this);
  }


  render() {
    return (
      <div>
       test 
      </div>
    )
}

export default App;
