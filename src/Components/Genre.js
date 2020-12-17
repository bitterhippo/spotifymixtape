import React from 'react';
import '../App.css';

//<div id="selector-box">
            //{Data.genres.map((item, idx) => (
            //<div key={idx}
                  //name={item.name}
                  //onClick={props.props}>
                  //<img
                  //src={`${item.img}`}
                  //width="100"
                  //height="100"/>
                  //</div>
                  //))}
                  //</div >
//<Router>
        //<div>
          //<Nav />
          //<Switch>
            //<Route path='/Genre' component={() => <Genre props={this.onClick} />} />
            //<Route path='/Mood' exact component={Mood} />
            //<Route path='/Activity' exact component={Activity} />
            //<Route path='/Occasion' exact component={Occasion} />
            //<Route path='/Home' component={() => <Home props={this.onClick} />} />
            //<Route path='/Search' exact component={Search} />
            //<Route path='/Library' exact component={Library} />
          //</Switch>
          //<FooterNav />
        //</div>
      //</Router>

//<h3 id='Logo'>Spotify Mixtape</h3>
    //<h3> Tags: {this.state.selected.length < 1 ? `Add New Tags` :
    //this.state.selected}</h3>


function Genre(props) {
      console.log('Genre props')
      console.log(props)
      return (
      <div id='viewscreen'>
      </div>
      );
}

export default Genre;
