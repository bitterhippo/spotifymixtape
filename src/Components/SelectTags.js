import React from 'react';
import '../App.css';
import StatusBar from '../Subcomponents/Footer';
import Footer from '../Subcomponents/StatusBar';
import NoteBox from '../Subcomponents/NoteBox';
import CreateTagInfo from '../Subcomponents/CreateTagInfo';
import TextPic from '../Subcomponents/TextPic';

function SelectTags () {
  return (
    <div>
      <div id='viewscreen'>
        <StatusBar />
        <NoteBox />
        <CreateTagInfo />
        <Footer />
      <div id="createtag-imgs">
        <TextPic props={['Funk.jpeg', 'Funk']} />
        <TextPic props={['Pop.jpeg', 'Pop']} />
        </div>
      </div>
    </div>
  );
}

export default SelectTags;
