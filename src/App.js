import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Presentational Components
import Nav from './Components/Nav';
import FooterNav from './Components/FooterNav'
import Genre from './Components/Genre';
import Mood from './Components/Mood';
import Activity from './Components/Activity';
import Occasion from './Components/Occasion';
import Library from './Components/Library';
import Home from './Components/Home';
import Search from './Components/Search';
import Viewscreen from './Subcomponents/Viewscreen';
import CreateTags from './Components/Createtags';
import SearchTags from './Components/SearchTags';


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
            <Route path='/Genre' component={() => <Genre props={this.onClick} />} />
            <Route path='/Createtags' exact component={CreateTags} />
            <Route path='/SearchTags' exact component={SearchTags} />
            <Route path='/Occasion' exact component={Occasion} />
            <Route path='/Home' component={() => <Home props={this.onClick} />} />
            <Route path='/Search' exact component={Search} />
            <Route path='/Library' exact component={Library} />
            <Viewscreen />
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App;
