import React from 'react';
import '../App.css';
import StatusBar from '../Subcomponents/Footer';
import Footer from '../Subcomponents/StatusBar';
import NoteBox from '../Subcomponents/NoteBox';
import SongBox from '../Subcomponents/SongBox';


class MixTape extends React.Component {
  constructor(props) {
    super(props);
    this.state = { }
  }


  render () {
    const arr = [1,2,3,4]
    return (
      <div>
        <div id='viewscreen'>
          <StatusBar />
          <Footer />
          <SongBox props={{img: 'funk.jpeg', songName: 'brimful of asha', artist: 'fatboy slim'}}/>
          <div>
            {arr.map((x,y) => 
              <div key={y}>{x}</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MixTape;
