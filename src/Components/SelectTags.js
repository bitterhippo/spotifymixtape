import React from 'react';
import '../App.css';
import StatusBar from '../Subcomponents/Footer';
import Footer from '../Subcomponents/StatusBar';
import DB from '../DB';


class SelectTags extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: "Genre" }


    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      data: e.target.dataset.value
    })
    console.log(this.state)
  }

  render() {
    //Current Test Block
  
    return (
      <div>
        <div id='viewscreen'>
          <StatusBar />
          <Footer />
          <h3>Tags :</h3>
          <div id="selector-box">
            <div data-value='Genre' onClick={this.handleClick}>
              {this.state.data === 'Genre' ? <u>{`Genre`}</u> : `Genre`}
            </div>
            <div data-value="Mood" onClick={this.handleClick}>
              {this.state.data === 'Mood' ? <u>{`Mood`}</u> : `Mood`}
            </div>
            <div data-value="Occasion" onClick={this.handleClick}>
              {this.state.data === 'Occasion' ? <u>{`Occasion`}</u> : `Occasion`}
            </div>
            <div data-value="Activity" onClick={this.handleClick}>
              {this.state.data === 'Activity' ? <u>{`Activity`}</u> : `Activity`}
            </div>
          </div>
          {/* This is the programatic rendering box 
            
            {DB[this.state.data][0].name}
          
          */}
          <div id="selector-container">
            {DB[this.state.data].map((current, int) => <div>{current.name}<img src={current.img} height="100px" width="100px"></img></div>)}
          </div>
        </div>
      </div>
    )
  };
}
export default SelectTags;
