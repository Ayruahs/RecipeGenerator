import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './Login.css';
import ClearIcon from '@material-ui/icons/Clear';
import PropTypes from 'prop-types';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import classNames from 'classnames';

const muiTheme = createMuiTheme({
    overrides: {
      MuiInput: {
        underline: {
          '&:hover:not($disabled):not($error):not($focused):before': {
            borderBottomColor: '#CAEBF2'   
            },
          },
        disabled: {},
        error: {},
        focused: {},
        },
      MuiButton: {
        root: {
          backgroundColor: "#FF3B3F",
          color: 'white'
        }
        
      }
      },
    palette: {
      primary: {
        main: '#FF3B3F',
        // contrastText: 'getContrastText(theme.palette.primary.main)'

      },
      secondary: {
        main:'#F5F5F5'
      }
    }
});

const variantIcon = {
    success: CheckCircleIcon,
    error: ErrorIcon,
    info: InfoIcon,
  };

const styles1 = theme => ({
    success: {
      backgroundColor: green[600],
    },
    error: {
      backgroundColor: theme.palette.error.dark,
    },
    info: {
      backgroundColor: theme.palette.primary.dark,
    },
    warning: {
      backgroundColor: amber[700],
    },
    icon: {
      fontSize: 20,
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing.unit,
    },
    message: {
      display: 'flex',
      alignItems: 'center',
    },
  });
  
  function MySnackbarContent(props) {
    const { classes, className, message, onClose, variant, ...other } = props;
    const Icon = variantIcon[variant];
  
    return (
      <SnackbarContent
        className={classNames(classes[variant], className)}
        aria-describedby="client-snackbar"
        message={
          <span id="client-snackbar" className={classes.message}>
            <Icon className={classNames(classes.icon, classes.iconVariant)} />
            {message}
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={onClose}
          >
            <CloseIcon className={classes.icon} />
          </IconButton>,
        ]}
        {...other}
      />
    );
  }
  
  MySnackbarContent.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    message: PropTypes.node,
    onClose: PropTypes.func,
    variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
  };
  
  const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);

class LoginPage extends Component{
    state={
        email: "",
        password: "",
        isLoggedIn: false,
        snackbarOpen: false,
        savedRecipes: [],
        gotRecipes: false,
        snackbarVariant: "",
        snackbarMessage: ""
    };

    inputStyle = {
      borderRadius: 4,
      backgroundColor: "white",
      border: '1px solid #FF3B3F',
      fontSize: 13,
      padding: '10px 12px',
      width: '250px',
      alignSelf: "center",
      borderColor: '#CAEBF2',
      boxShadow: '0 0 0 0.05rem #4CCCB3',
      marginTop: '5%',
      marginBottom: '5%',
      fontFamily: [
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        'Roboto',
        '"Helvetica Neue"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderColor: '#4CCCB3',
        boxShadow: '0 0 0 0.05rem #4CCCB3'
      },
    };

    handleChange = event => {
      event.preventDefault();
      this.setState({[event.target.name]: event.target.value});
    };

    onLogin = event => {
        event.preventDefault();

	//return fetch("http://167.99.232.195:6547/login/" + this.state.email + "&" + this.state.password).then( response => {
        return fetch("/login/" + this.state.email + "&" + this.state.password).then( response => {
            return response.json();
            }).then( jsonObj => {
                if(jsonObj.HTTPcode === 400){
                    console.log("Error1: " + jsonObj.message);  
                    this.setState({
                        snackbarVariant: "error",
                        snackbarMessage: jsonObj.message,
                        snackbarOpen: true
                    });
                }else if(jsonObj.HTTPcode === 401){
                    console.log("Error2: " + jsonObj.message);  
                    this.setState({
                        snackbarVariant: "error",
                        snackbarMessage: jsonObj.message,
                        snackbarOpen: true
                    });  
                }else{
                    console.log("Message3: " + jsonObj.message);
                    this.setState({
                        isLoggedIn: true,
                        snackbarVariant: "success",
                        snackbarMessage: jsonObj.message,
                        snackbarOpen: true
                    });
                }
            }).catch( e => {
                console.log(e);
            })
    };

    onRegister = event => {
        event.preventDefault();

        //return fetch("http://167.99.232.195:6547/register/" + this.state.email + "&" + this.state.password).then( response => {
        return fetch("/register/" + this.state.email + "&" + this.state.password).then( response => {
            return response.json();
            }).then( jsonObj => {
                if(jsonObj.HTTPcode === 400){
                    console.log("Error: " + jsonObj.message);   
                    this.setState({
                        snackbarVariant: "error",
                        snackbarMessage: jsonObj.message,
                        snackbarOpen: true
                    }); 
                }else if(jsonObj.HTTPcode === 401){
                    console.log("Error: " + jsonObj.message);   
                    this.setState({
                        snackbarVariant: "error",
                        snackbarMessage: jsonObj.message,
                        snackbarOpen: true
                    }); 
                }else{
                    console.log("Message: " + jsonObj.message);
                    this.setState({
                        isLoggedIn: true,
                        snackbarVariant: "success",
                        snackbarMessage: jsonObj.message,
                        snackbarOpen: true
                    });
                }
            }).catch( e => {
                console.log(e);
            })
    };

    handleSnackbarClick = () => {
        this.setState({ snackbarOpen: true });
    };

    handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }

        this.setState({ snackbarOpen: false });
    };

    signOut = event =>{
        event.preventDefault();

        //return fetch("http://167.99.232.195:6547/logout").then( response => {
        return fetch("/logout").then( response => {
            return response.json();
            }).then( jsonObj => {
                if(jsonObj.HTTPcode === 400){
                    console.log("Error: " + jsonObj.message);    
                }else if(jsonObj.HTTPcode === 401){
                    console.log("Error: " + jsonObj.message);    
                }else{
                    console.log("Message: " + jsonObj.message);
                    this.setState({
                        isLoggedIn: false
                    });
                }
            }).catch( e => {
                console.log(e);
            })
    };

    getRecipes = () =>{
        if(this.state.isLoggedIn){
            //return fetch("http://167.99.232.195:6547/getRecipes").then( response => {
            return fetch("/getRecipes").then( response => {
                return response.json();
                }).then( jsonObj => {
                    console.log(jsonObj);
                    if(jsonObj.HTTPcode === 400)
                        console.log("Message: " + jsonObj.message);
                    else{
                        console.log("RECES: " + jsonObj);
                        var arr = jsonObj.recipeList;
    
                        this.setState({
                            savedRecipes: arr,
                            gotRecipes: true
                        })
                    }
                }).catch( e => {
                    console.log(e);
                })
        }
    }

    openLink(url){
        var win = window.open(url, '_blank');
        win.focus();
    };

    deleteRecipe = (recipe) =>{
        let request = {
			headers: {
				"Accept": 'application/json'
			}
		};
        var recipeUrl = recipe.recipe_url;
        //return fetch("http://167.99.232.195:6547/deleteSavedRecipe/" + recipeUrl, request).then( response => {
        return fetch("/deleteSavedRecipe/" + recipeUrl, request).then( response => {
            return response.json();
            }).then( jsonObj => {
                console.log("Message: " + jsonObj.message);
            }).catch( e => {
                console.log(e);
            })
    };

    

    render(){
        if(!this.state.isLoggedIn){
            return(
                <MuiThemeProvider theme={muiTheme}>

                    <div className="RightHalf">
                        <div className="LoginDiv">
                            <div className="LogInEmail">
                            Login with your username
                            </div>

                            <div className="InputClass">

                                <TextField onChange={this.handleChange} InputProps={{disableUnderline: true}} 
                                style={this.inputStyle} name="email" value={this.state.email} placeholder="username" />
                                <TextField onChange={this.handleChange} InputProps={{disableUnderline: true}} 
                                style={this.inputStyle} name="password" type="password" value={this.state.password} placeholder="password" />

                                <Button onClick={this.onLogin} 
                                style={{alignSelf: "center", height: "50px", width: "280px", marginTop: '10%'}}>
                                    LOGIN 
                                </Button>
                                <Button onClick={this.onRegister} 
                                style={{alignSelf: "center", height: "50px", width: "280px", marginTop: '10%'}}>
                                    REGISTER
                                </Button>

                                <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        open={this.state.snackbarOpen}
                        autoHideDuration={4000}
                        onClose={this.handleSnackbarClose}
                        >
                        <MySnackbarContentWrapper
                            onClose={this.handleClose}
                            variant={this.state.snackbarVariant}
                            message={this.state.snackbarMessage}
                        />
                        </Snackbar>
                            </div>
                        </div>
                    </div>


                </MuiThemeProvider>
            );
        }else{
            const classes = {
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
            };
            return(
                <MuiThemeProvider theme={muiTheme}>
                    <div>
                    {this.state.gotRecipes &&
                    <GridList cellHeight={200} className={classes.gridList}>
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                        <ListSubheader component="div">Recipes you have saved</ListSubheader>
                    </GridListTile>
                    {this.state.savedRecipes.map(recipe => (

                        <GridListTile key={recipe.recipe_name} onClick={() => this.openLink(recipe.recipe_url)}>
                        <img src={recipe.image_url} alt={recipe.recipe_name} />
                        <GridListTileBar
                            title={recipe.recipe_name}
                            actionIcon={
                            <IconButton className={classes.icon} onClick={() => this.deleteRecipe(recipe)}>
                                <ClearIcon />
                            </IconButton>
                            }
                        />
                        </GridListTile>
                    ))}
                    </GridList>
                    }
                            
                        <Button onClick={this.getRecipes} 
                        style={{alignSelf: "center", height: "50px", width: "280px", marginTop: '10%'}}>
                            GET SAVED RECIPES
                        </Button>
                        <Button onClick={this.signOut} 
                        style={{alignSelf: "center", height: "50px", width: "280px", marginTop: '10%'}}>
                            SIGN OUT 
                        </Button>

                        <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        open={this.state.snackbarOpen}
                        autoHideDuration={4000}
                        onClose={this.handleSnackbarClose}
                        >
                        <MySnackbarContentWrapper
                            onClose={this.handleClose}
                            variant={this.state.snackbarVariant}
                            message={this.state.snackbarMessage}
                        />
                        </Snackbar>
                    </div>
                </MuiThemeProvider>
            );
        }
    }
}

export default LoginPage;
