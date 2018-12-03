import React, { Component } from 'react';
import './App.css';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import MultipleSearch from './Autocomplete';

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

            <MultipleSearch/>
            

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
