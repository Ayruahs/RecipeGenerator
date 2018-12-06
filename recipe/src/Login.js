import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './Login.css';

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

class LoginPage extends Component{
    state={
        email: "",
        password: "",
        isLoggedIn: false
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

        return fetch("/login/" + this.state.email + "&" + this.state.password).then( response => {
            return response.json();
            }).then( jsonObj => {
                if(jsonObj.HTTPCode === 400){
                    console.log("Error: " + jsonObj.message);    
                }else if(jsonObj.HTTPCode === 401){
                    console.log("Error: " + jsonObj.message);    
                }else{
                    console.log("Message: " + jsonObj.message);
                    this.setState({
                        isLoggedIn: true
                    });
                }
            }).catch( e => {
                console.log(e);
            })
    };

    onRegister = event => {
        event.preventDefault();

        return fetch("/register/" + this.state.email + "&" + this.state.password).then( response => {
            return response.json();
            }).then( jsonObj => {
                if(jsonObj.HTTPCode === 400){
                    console.log("Error: " + jsonObj.message);    
                }else if(jsonObj.HTTPCode === 401){
                    console.log("Error: " + jsonObj.message);    
                }else{
                    console.log("Message: " + jsonObj.message);
                    this.setState({
                        isLoggedIn: true
                    });
                }
            }).catch( e => {
                console.log(e);
            })
    };

    getSaved = () =>{

    };

    signOut = event =>{
        event.preventDefault();

        return fetch("/logout").then( response => {
            return response.json();
            }).then( jsonObj => {
                if(jsonObj.HTTPCode === 400){
                    console.log("Error: " + jsonObj.message);    
                }else if(jsonObj.HTTPCode === 401){
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

    render(){
        if(!this.state.isLoggedIn){
            return(
                <MuiThemeProvider theme={muiTheme}>

                    <div class="RightHalf">
                        <div class="LoginDiv">
                            <div class="LogInEmail">
                            Login with your email
                            </div>

                            <div class="InputClass">

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
                            </div>
                        </div>
                    </div>


                </MuiThemeProvider>
            );
        }else{
            return(
                <MuiThemeProvider theme={muiTheme}>
                    <div>
                        <Button onClick={this.signOut} 
                        style={{alignSelf: "center", height: "50px", width: "280px", marginTop: '10%'}}>
                            SIGN OUT 
                        </Button>
                    </div>
                </MuiThemeProvider>
            );
        }
    }
}

export default LoginPage;