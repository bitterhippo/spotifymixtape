import React from 'react';
import '../App.css';
import StatusBar from '../Subcomponents/Footer';
import Footer from '../Subcomponents/StatusBar';
import NoteBox from '../Subcomponents/NoteBox';
import CreateTagInfo from '../Subcomponents/CreateTagInfo';
import TextPic from '../Subcomponents/TextPic';

function MixTape () {
  return (
    <div>
      <div id='viewscreen'>
        <StatusBar />
        <NoteBox/>
        <Footer />
      </div>
    </div>
  );
}

export default MixTape;
