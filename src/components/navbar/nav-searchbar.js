import React, { useEffect } from 'react';
import { InputBase, makeStyles } from '@material-ui/core';


const NavSearchbar = () => {
    useEffect(()=>{
        document.getElementById('nav-searchbar').classList.add('animate__fadeInRight');
    },[]);

    const style = searchbarStyle();

    return ( 
        <>
            <div id='nav-searchbar' className='animate__animated'>
                <InputBase
                    classes={{root: style.root}}
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </div>
        </>
    );
}
 
export default NavSearchbar;

const searchbarStyle = makeStyles({
    root:{
        border: '1px solid black',
        borderRadius: '12px',
    }
})