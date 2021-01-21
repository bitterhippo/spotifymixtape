import React from 'react';
import '../App.css';
import StatusBar from '../Subcomponents/Footer';
import Footer from '../Subcomponents/StatusBar';
import DB from '../DB';
import TextPic from '../Subcomponents/TextPic';
import Tagged from '../Subcomponents/Tagged';


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

    const boxNames = ['Genre', 'Mood', 'Occasion', 'Activity'];

    return (
      <div>
        <div id='viewscreen'>
          <StatusBar />
          <Footer />
          <h3>Tags : </h3>
          <div style={styles.tagged}>
            {this.state.selected < 1 ? null : this.state.selected.map(((x, y) => <Tagged key={y} props={[x]}/>
            ))}
          </div>
          <div id="selector-box">
            {boxNames.map((x, y) => <div
              data-value={x}
              onClick={this.handleClick}
              key={y}>
              {this.state.data === `${x}` ? <u>{`${x}`}</u> : `${x}`}
            </div>)}
          </div>
          {/* This is the programatic rendering box 
            
            <div className="box-text">{current.name}</div>
              <img onClick={this.getElement} data-value={current.name} className="img-tile" src={current.img} height="100px" width="100px" />
            
          */}
          <div id="selector-container">
            {DB[this.state.data].map((current, int) => <div key={int}>
              <TextPic dataset={current.name} onClick={this.getElement} props={[`${current.img}`, `${current.name}`]} />
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

const styles = {
  tagged : {
    alignContent: "center",
    display: "inline-flex",
    flexWrap: "center",
    gap: "10px"
  }
}

export default SelectTags;
