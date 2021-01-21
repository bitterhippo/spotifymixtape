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
          <h2 style={{textAlign: "center"}}>Select Tags</h2>
          <h3>Tags : </h3>
          <div style={styles.tagged}>
            {this.state.selected < 1 ? null : this.state.selected.map(((x, y) => <Tagged key={y} props={[x]} />
            ))}
          </div>
          <div style={styles.selectorBox}>
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
          <div style={styles.counter}>
            <div style={styles.counterContainer}>
              {Math.floor(Math.random() * Math.floor(67))} Tracks
            </div>
          </div>
        </div>
      </div>
    )
  };
}

const styles = {
  tagged: {
    display: "inline-flex",
    flexWrap: "center",
    gap: "10px",
    marginBottom: 25,
    position: "absolute"
  },
  counter: {
    textAlign: "center",
    marginTop: 50,
    display: "flex",
    justifyContent: "center"
  },
  counterContainer: {
    backgroundColor: "green",
    borderRadius: '25px',
    padding: 10,
    width: 150
  },
  selectorBox: {
    display: "inline-flex",
    textAlign: "center",
    gap: 20,
    marginLeft: "18%",
    marginBottom: 20,
    marginTop: 55
  }
}

export default SelectTags;
