import React, { Component } from 'react';
import './App.css';
import MultipleSearch from './Autocomplete';
import Login from './Login';

class App extends Component {

  render() {
    return (
      <div className="App">
      
        <div>
          <div className="ingredients-select">
            <div style={{marginTop:'20%', fontSize:'300%'}}>What's in your fridge?</div>
              <MultipleSearch/>
            <div style={{marginTop:'20%', fontSize:'150%'}}>
            Enter the ingredients you have and we'll<br/> tell you what you can make!
            </div>
          </div>
        </div>

        <div>
          <div className="recipe-display">
            <Login/>
          </div>
        </div>

      </div>
      
    );
  }
}

export default App;
