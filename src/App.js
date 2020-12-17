import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Presentational Components
import Viewscreen from './Subcomponents/Viewscreen';
import Newtapes from './Components/Newtapes';
import SelectTags from './Components/SelectTags';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      selected: []
    }

    this.onClick = this.onClick.bind(this);
  }

  //This function is currently quite verbose - please use a destructoring assignment to increase the readability. 
  onClick(event) {
    if (this.state.selected.includes(event.target.getAttribute('name')) === false) {
      this.setState({
        selected: [...this.state.selected, event.target.getAttribute('name')]
      })
    }
    else {
      let removedItem = this.state.selected.filter(x => x !== event.target.getAttribute('name'))
      console.log(removedItem)
      this.setState({
        selected: [...removedItem]
      })
    }
  }

  render() {
    //Test Block Here
    console.log('State Test')
    console.log(this.state)

    return (
      <Router>
        <div>
          <Switch>
            <Route path='/Newtapes' exact component={Newtapes} />
            <Route path='/SelectTags' exact component={SelectTags} />
            <Viewscreen />
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App;
