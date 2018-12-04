import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import RecipeGridList from './RecipeGridList';

const styles = theme => ({
    paper: {
        // position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
});

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
          <div>
            <Modal
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

export default withStyles(styles)(RecipeModal);