import React from 'react';
import { makeStyles, TextField, InputAdornment } from '@material-ui/core';

//icons
import SearchIcon from '@material-ui/icons/Search';

const NavSearchbar = () => {
    const style = searchbarStyle();
    return ( 
        <>
            <div id='nav-searchbar' className='animate__animated'>
                <TextField
                    fullWidth
                    classes={{root: style.root}}
                    placeholder="Search…"
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon />
                          </InputAdornment>
                        ),
                      }}
                />
            </div>
        </>
    );
}
 
export default NavSearchbar;

const searchbarStyle = makeStyles({
    root:{
        padding: '5px',
        width:'400px',
    }
});