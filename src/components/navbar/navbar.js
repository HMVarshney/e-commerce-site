import React, { useState } from 'react';
import { Toolbar, AppBar,IconButton, Avatar, Typography, Button } from '@material-ui/core';
import { connect } from 'react-redux';

//css
import '../../assets/css/navbar.css';

//icons
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderTwoToneIcon from '@material-ui/icons/FavoriteBorderTwoTone';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';

//local imports
import NavSearchbar from './nav-searchbar';
import { logoutUser } from '../../redux/actions';

const Navbar = (props) => {
    const [searchVisible, setSearchVisible] = useState(false);

    return(
        <>
        <AppBar color='default' position='sticky'>
            <Toolbar>
                <nav>
                    Logo
                </nav>
                <div className='flex-grow' />
                <nav className='nav-menu'>
                    {searchVisible && 
                    <div>
                        <NavSearchbar />
                    </div>
                    }                       
                    <div>
                        <IconButton onClick={()=>setSearchVisible(!searchVisible)}><SearchIcon /></IconButton>
                    </div>
                    <div>
                        <IconButton><FavoriteBorderTwoToneIcon /></IconButton>
                    </div>
                    <div>
                        <IconButton ><ShoppingCartTwoToneIcon /></IconButton>
                    </div>
                    <div>
                        {!props.auth.isAuthenticated ? <Typography variant='body1'><a href='/login'> Login / Sign Up </a></Typography> : 'Welcome User' }
                        <Avatar />
                    </div>
                    {props.auth.isAuthenticated && 
                        <Button href='/login' onClick={()=>props.dispatch(logoutUser())}>Logout</Button>    
                    }
                </nav>
            </Toolbar>
        </AppBar>
        </>
    );
}

const stateToProps = (state) => ({
    auth: {
        isAuthenticated: state.isAuthenticated
    }
})

export default (connect(stateToProps)(Navbar));
