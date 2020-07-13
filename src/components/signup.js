import React, { useState } from 'react';
import { TextField, makeStyles, Paper, Typography, Avatar, Container, Button } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

//css
import '../assets/css/login-page.css';

//local imports
import { registerUser } from '../redux/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const SignUp = (props) => {
    const [credentials, setCredentials] = useState({
        email:'',
        password:'',
        name:''
    });
    const style = loginFormStyles();

    const handleSubmit = () => {
        if(credentials.email && credentials.password){
            props.dispatch(registerUser(credentials.email, credentials.password, credentials.name));
        }
    };   
    return ( 
        <>  
        <Container maxWidth="xs" component='main'>
            <Paper classes={{root: style.paper }} elevation={2}>
                <Avatar><LockOutlinedIcon fontSize='large' /></Avatar>
                <Typography component="h1" variant="h4">
                    Sign Up
                </Typography>
                <TextField
                    value={credentials.name}
                    onChange={(e)=>setCredentials({...credentials, name: e.target.value})}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                />
                <TextField
                    value={credentials.email}
                    onChange={(e)=>setCredentials({...credentials, email: e.target.value})}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                />
                <TextField
                    value={credentials.password}
                    onChange={(e)=>setCredentials({...credentials, password: e.target.value})}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                />
                <Button onClick={()=>handleSubmit()} color='primary' variant='contained'>Sign Up</Button>           
            </Paper>

            <div style={{display:'flex', justifyContent:'center', marginTop:'1rem'}}> 
                <Typography variant='h6' component='h1'>
                    Already have an account? 
                    <Link to='/login'> Sign In </Link>
                </Typography>
            </div>
        </Container>
        </>
    );
};

const stateToProps = (state) => ({
    auth: {
        isLoggedIn: state.isLoggedIn,
    }
});
 
export default (connect(stateToProps)(SignUp));


const loginFormStyles = makeStyles({
    paper:{
        display:'flex', 
        flexDirection:'column', 
        alignItems:'center', 
        padding:'20px',
        marginTop:'5rem',
        background: 'rgb(248, 248, 255)'
    }
})