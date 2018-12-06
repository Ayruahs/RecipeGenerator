import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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

    onSubmit = event => {
      event.preventDefault();
    //   LoginStore.setLoginPageEmail(this.state.email);
    //   LoginStore.setLoginPagePassword(this.state.password);
    //   try{
    //     LoginStore.LoginPageUserLogin().then(() => {
    //       if(LoginStore.isLoggedIn){
    //         this.props.history.push('/scopii');
    //       }
    //     })
    //   }catch(e){
    //     alert(e.message);
    //   }
    //   this.setState({
    //       isLoggedIn: true
    //   })
    // };

    return fetch("/login/" + this.state.email + "&" + this.state.password).then( response => {
        console.log(response)
        // return response.json();
    // }).then( jsonObj => {
    //     if(jsonObj.count === 0){
    //         console.log("number of recipes: " + jsonObj.count);    
    //     }else{
    //         console.log("number of recipes: " + jsonObj.count);

    //         var arr = jsonObj.hits;
    //         var arr2 = [];

    //         for(var i=0; i<arr.length; i++){
    //             arr2.push(arr[i].recipe); 
    //         }

    //         console.log("1: " + typeof this.state.APIRecipes);
    //         this.setState({
    //             open: true,
    //             APIRecipes: arr2
    //         })
    //     }
    // }).catch( e => {
    //     console.log(e);
    // })
    });
    }

    onRegister = () => {
        this.setState({
            isLoggedIn: true
        })
    };

    getSaved = () =>{

    };

    signOut = () =>{
        this.setState({
            isLoggedIn: false
        })
    }

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

                                <Button onClick={this.onSubmit} 
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