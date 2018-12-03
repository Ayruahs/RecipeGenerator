import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="ingredients-container">
          <div className="ingredients-select">
            <ExpansionPanel style={{backgroundColor:"#DFDCE3"}} >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                Expansion Panel 1
              </ExpansionPanelSummary>
              
              <ExpansionPanelDetails>
                sdfsf
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        
        </div>

        <div className="recipe-container">
          <div className="recipe-display">
            <ExpansionPanel style={{backgroundColor:"#DFDCE3"}} >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                Expansion Panel 1
              </ExpansionPanelSummary>
              
              <ExpansionPanelDetails>
                sdfsf
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </div>
      </div>
      
    );
  }
}

export default App;
