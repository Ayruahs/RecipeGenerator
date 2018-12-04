import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
// import tileData from './tileData';

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: '#EFEFEF',
      align: 'center'
    },
    gridList: {
      width: '40vw',
      height: '95vh',
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
});

class RecipeGridList extends Component {
    state = {
        tileData: []
    }

    render(){
        const { classes } = this.props;
       
        return (
        <div className={classes.root}>
            <GridList cellHeight={200} className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                <ListSubheader component="div">Recipes you can make</ListSubheader>
            </GridListTile>
            {this.props.tileData.map(tile => (

                <GridListTile key={tile.label}>
                <img src={tile.image} alt={tile.label} />
                <GridListTileBar
                    title={tile.label}
                    // subtitle={<span>by: {tile.author}</span>}
                    actionIcon={
                    <IconButton className={classes.icon}>
                        <InfoIcon />
                    </IconButton>
                    }
                />
                </GridListTile>
            ))}
            </GridList>
        </div>
        );
    }
}

RecipeGridList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeGridList);