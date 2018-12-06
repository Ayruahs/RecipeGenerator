import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

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
    };

    openLink = (url) => {
        console.log("the url is: " + url);
        window.open(url, '_blank');
        // win.focus();
    };

    saveRecipe = (tile) => {
        var recipeName = tile.label;
        var imageUrl = tile.image;
        var recipeUrl = tile.url;
        let request = {
			headers: {
				"Accept": 'application/json'
			}
		};
        return fetch("/saveRecipe/" + recipeName + "&" + imageUrl + "&" + recipeUrl, request).then( response => {
            return response.json();
            }).then( jsonObj => {
                console.log("Message: " + jsonObj.message);
            }).catch( e => {
                console.log(e);
            })
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

                <GridListTile key={tile.label} onClick={() => this.openLink(tile.url)}>
                <img src={tile.image} alt={tile.label} />
                <GridListTileBar
                    title={tile.label}
                    subtitle={<span>{tile.calories} Calories</span>}
                    actionIcon={
                    <IconButton className={classes.icon} onClick={() => this.saveRecipe(tile)}>
                        <AddIcon />
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