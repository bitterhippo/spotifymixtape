import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Presentational Components
import Viewscreen from './Subcomponents/Viewscreen';
import Newtapes from './Components/Newtapes';
import SelectTags from './Components/SelectTags';
import MixTape from './Components/MixTape';
import SongView from "./Components/SongView";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      selected: []
    }
  }

  render() {
    //Test Block Here

    return (
      <Router>
        <div>
          <Switch>
            <Route path='/Newtapes' exact component={Newtapes} />
            <Route path='/SelectTags' exact component={SelectTags} />
            <Route path='/MixTape' exact component={MixTape} />
            <Route path='/SongView' exact component={SongView} />
            <Viewscreen />
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App;
