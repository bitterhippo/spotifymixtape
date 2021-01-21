import React from 'react';
import '../App.css';
import StatusBar from '../Subcomponents/Footer';
import Footer from '../Subcomponents/StatusBar';
import DB from '../DB';
import TextPic from '../Subcomponents/TextPic';


class SelectTags extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: "Genre", selected: [] }


    this.handleClick = this.handleClick.bind(this);
    this.getElement = this.getElement.bind(this);
  }

  handleClick(e) {
    this.setState({
      data: e.target.dataset.value
    })
  }

  getElement(e) {
    console.log(e.target.dataset.value)
    if (this.state.selected.includes(e.target.dataset.value)) {
      this.setState({
        selected: [...this.state.selected.filter(x => x !== e.target.dataset.value)]
      })
    } else {
      this.setState({
        selected: [...this.state.selected, e.target.dataset.value]
      })
      console.log(this.state)
    }
  }

  render() {
    //Current Test Block

    return (
      <div>
        <div id='viewscreen'>
          <StatusBar />
          <Footer />
          <h3>Tags : {this.state.selected.join('  ')}</h3>
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
            
            <div className="box-text">{current.name}</div>
              <img onClick={this.getElement} data-value={current.name} className="img-tile" src={current.img} height="100px" width="100px" />
            
          */}
          <div id="selector-container">
            {DB[this.state.data].map((current, int) => <div key={int}>
              <TextPic dataset={current.name} onClick={this.getElement} props={[`${current.img}`,`${current.name}`]} />
            </div>)}
          </div>
          <div id="track-Counter">
            Track Counter Placeholder
          </div>
        </div>
      </div>
    )
  };
}
export default SelectTags;
