import React from 'react';
import '../App.css';
import Data from '../DB'

function SearchTags () {
  return (
    <div>
      {Data.genres.map((item, idx) => (
        <div key={idx} id="listbox-container">
           <img
                  src={`${item.img}`}
                  width="100"
                  height="100"/>
          <h1>{item.name}</h1>
          <button>Press me</button>
        </div>
      ))}
    </div>
  );
}

export default SearchTags;
