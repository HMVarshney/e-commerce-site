import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Divider } from '@material-ui/core';
import { connect } from 'react-redux';

//icons
import PersonIcon from '@material-ui/icons/Person';
import StarsTwoToneIcon from '@material-ui/icons/StarsTwoTone';
import FavoriteBorderTwoToneIcon from '@material-ui/icons/FavoriteBorderTwoTone';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import ChildCareIcon from '@material-ui/icons/ChildCare';

const menuLabels = [
    {label: 'Men', icon: <PersonIcon />},
    {label: 'Women', icon: <PersonIcon />},
    {label: 'Junior', icon: <ChildCareIcon />},
    {label: 'Premium', icon: <StarsTwoToneIcon /> }
]

const MobileNavbar = (props) => {
    const href = props.auth.isAuthenticated ? '/' : '/login';
    return (  
        <div>
            <Drawer open={props.mobileNavOpen} onClose={()=>props.toggleMobileNav(!props.mobileNavOpen)}>
                <List>
                {menuLabels.map((label,i)=>(
                    <ListItem key={i} style={{padding:'10px 40px'}}>
                        <ListItemIcon>{label.icon}</ListItemIcon>
                        <ListItemText>{label.label}</ListItemText>
                    </ListItem>
                ))}
                </List>

                <Divider />
                

                <div className='cart-options-mobile'>
                    <ul>
                        <li><a href={href}><FavoriteBorderTwoToneIcon /></a></li>
                        <li><a href={href}><ShoppingCartTwoToneIcon /></a></li>
                    </ul>
                </div>
            </Drawer>
        </div>
    );
};

const stateToProps = (state) => ({
    auth:{
        isAuthenticated: state.isAuthenticated,
    }
})
 
export default (connect(stateToProps)(MobileNavbar));