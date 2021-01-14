import React from 'react';
import '../App.css';
import StatusBar from '../Subcomponents/Footer';
import Footer from '../Subcomponents/StatusBar';
import NoteBox from '../Subcomponents/NoteBox';
import CreateTagInfo from '../Subcomponents/CreateTagInfo';
import TextPic from '../Subcomponents/TextPic';
import SongBox from '../Subcomponents/SongBox';


class MixTape extends React.Component {
  constructor(props) {
    super(props);
    this.state = { }
  }


  render () {
    return (
      <div>
        <div id='viewscreen'>
          <StatusBar />
          <Footer />
          <SongBox props={'Funk.jpeg'}/>
        </div>
      </div>
    );
  }
}

export default MixTape;
