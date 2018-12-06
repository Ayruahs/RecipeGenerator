import React, {Component} from 'react';
import Modal from '@material-ui/core/Modal';
import RecipeGridList from './RecipeGridList';

class RecipeModal extends Component{
    state = {
        open: true,
        tileData: this.props.tileData
    };
    
    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
        this.props.closeHandler();
    };

    render() {
        return (
          <div style={{alignContent:"center"}}>
            <Modal style={{width:"50%", marginTop:'20px', marginLeft:'25%'}}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.open}
              onClose={this.handleClose}
            >
              <div>
                <RecipeGridList tileData={this.state.tileData} />
              </div>
            </Modal>
          </div>
        );
      }
}

export default RecipeModal;