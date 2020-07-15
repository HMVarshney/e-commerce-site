import React from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Divider } from '@material-ui/core';
import { connect } from 'react-redux';

//icons
import FavoriteBorderTwoToneIcon from '@material-ui/icons/FavoriteBorderTwoTone';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';

const menuLabels = [
    {label: 'Men', icon:'/assets/icons/shirt.png' },
    {label: 'Women', icon:'/assets/icons/shirt.png' },
    {label: 'Junior', icon:'/assets/icons/baby-clothes.png'},
    {label: 'Premium', icon:'/assets/icons/clothes.png' }
]

const MobileDrawer = (props) => {
    const href = props.auth.isAuthenticated ? '/' : '/login';
    return (  
        <div>
            <Drawer open={props.mobileNavOpen} onClose={()=>props.toggleMobileNav(!props.mobileNavOpen)}>
                <List>
                {menuLabels.map((label,i)=>(
                    <ListItem key={i} style={{marginLeft:'10px', marginRight:'100px'}}>
                        <ListItemIcon><img src={label.icon} alt='clothes-icon' /></ListItemIcon>
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
 
export default (connect(stateToProps)(MobileDrawer));