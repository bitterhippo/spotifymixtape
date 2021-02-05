import React from 'react';
import '../App.css';
import StatusBar from '../Subcomponents/Footer';
import Footer from '../Subcomponents/StatusBar';
import DB from '../DB';
import TextPic from '../Subcomponents/TextPic';
import Tagged from '../Subcomponents/Tagged';
import { Link } from 'react-router-dom';

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
          <h2 style={{ textAlign: "center" }}>Select Tags</h2>
          <h3>Tags : </h3>
          <div style={styles.tagged}>
            {this.state.selected < 1 ? "" : this.state.selected.map(((x, y) => <Tagged key={y} props={[x]} />
            ))}
          </div>
          <div style={styles.selectorBox}>
            {boxNames.map((x, y) => <div
              data-value={x}
              onClick={this.handleClick}
              key={y}>
              {this.state.data === `${x}`
                ? <span style={styles.selected}>{`${x}`}</span>
                : `${x}`}
            </div>)}
          </div>
          <div id="selector-container">
            {DB[this.state.data].map((current, int) => <div key={int}>
              <TextPic dataset={current.name} onClick={this.getElement} props={[`${current.img}`, `${current.name}`]} />
            </div>)}
          </div>
          <div style={styles.counter}>
            <div style={styles.counterContainer}>
              <Link
                style={styles.link}
                to={{
                  pathname: "/MixTape",
                  state: {
                    testValue: [...this.state.selected]

                  }
                }}>{Math.floor(Math.random() * Math.floor(67))} Tracks</Link>
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
    position: "absolute"
  },
  counter: {
    textAlign: "center",
    marginTop: 50,
    display: "flex",
    justifyContent: "center"
  },
  counterContainer: {
    position: "absolute",
    top: "80%",
    backgroundColor: "green",
    borderRadius: '25px',
    padding: 10,
    width: 150,
  },
  selectorBox: {
    display: "inline-flex",
    textAlign: "center",
    gap: 20,
    marginLeft: "18%",
    marginBottom: 10,
    marginTop: 90,
    textDecoration: "green"
  },
  link: {
    textDecoration: "none",
    color: "white"
  },
  selected: {
    textDecoration: "underline solid white 2px"
  }
}

export default SelectTags;
