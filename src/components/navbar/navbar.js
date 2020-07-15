import React, { useState } from 'react';
import { Toolbar, AppBar,IconButton, Avatar, Typography, Button, Menu, MenuItem, makeStyles, Grow } from '@material-ui/core';
import { connect } from 'react-redux';

//css
import '../../assets/css/navbar.css';

//icons
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderTwoToneIcon from '@material-ui/icons/FavoriteBorderTwoTone';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';

//local imports
import NavSearchbar from './nav-searchbar';
import { logoutUser } from '../../redux/actions/authActions';
import MobileNavbar from './mobile-navbar';



const Navbar = (props) => {
    const [searchVisible, setSearchVisible] = useState(false);
    const [mobileNavOpen,toggleMobileNav] = useState(false);
    const [anchorEl, setAnchor] = useState(null);

    return(
        <>
        <AppBar color='default' position='sticky'>
            <Toolbar>
                <nav className='d-inline d-lg-none'>
                    <IconButton onClick={()=>toggleMobileNav(!mobileNavOpen)}><MenuTwoToneIcon /></IconButton>
                </nav>
                <nav>
                    Logo
                </nav>
                <div className='flex-grow' />
                <nav className='nav-menu-desktop d-none d-lg-flex'>
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
                </nav>
                <nav className='nav-menu-des
                top'>
                    <div>
                        <Avatar onClick={(e)=>setAnchor(e.currentTarget)} />
                        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={()=>setAnchor(null)}>
                            {props.auth.isAuthenticated ?
                                <> 
                                    <MenuItem><Button href='/listings'>Listings</Button></MenuItem>
                                    <MenuItem><Button onClick={()=>props.dispatch(logoutUser())}>Logout</Button></MenuItem> 
                                </>:
                                <MenuItem><Button href='/login'>Login</Button></MenuItem>
                            }      
                        </Menu>
                    </div>
                </nav>
            </Toolbar>
        </AppBar>
        <MobileNavbar mobileNavOpen={mobileNavOpen} toggleMobileNav={toggleMobileNav} />
        </>
    );
}

const stateToProps = (state) => ({
    auth: {
        isAuthenticated: state.auth.isAuthenticated
    }
});

export default (connect(stateToProps)(Navbar));


// const menuButton = makeStyles({
//     root:{
//         '&::hover':{
//             background: 'none',
//         }
//     }
// });