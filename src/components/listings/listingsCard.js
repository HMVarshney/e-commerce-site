import React, { useState } from "react";
import { Avatar, Typography } from "@material-ui/core";
import { Popover, PopoverBody } from 'reactstrap';

//css
import '../../assets/css/card.css';

const ListingsCard = (props) => {
    let title = props.data.itemName;
    if(title.length>18){
      title = title.slice(0,30) + "..."; }
      
    let location = props.data.location;
    if(location.length>40){
      location = location.slice(0,26) + ".."; }

    // let datePosted = (Date(props.data.date).toLocaleString().slice(0,15));

    const [popupOpen, setPopupOpen] = useState(false);

    const handlePopupOpen = () => {
        setPopupOpen(true)
    }

    const handlePopupClose = () => {
      setPopupOpen(false);
    }

    return ( 
      <>
         {/* {badge ? (
          <div className="bnb-card-plan-badge mr-3">
            {props.data.plan ? <Tooltip title={props.data.plan.toUpperCase()}> 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              viewBox="0 0 24 24"
              fill={props.data.plan === "partner" ? "#e6be8a" : "#66b266"}
            >
              <g>
                <rect fill="none" height="24" width="24" />
                <rect fill="none" height="24" width="24" />
              </g>
              <g>
                <path d="M23,12l-2.44-2.79l0.34-3.69l-3.61-0.82L15.4,1.5L12,2.96L8.6,1.5L6.71,4.69L3.1,5.5L3.44,9.2L1,12l2.44,2.79l-0.34,3.7 l3.61,0.82L8.6,22.5l3.4-1.47l3.4,1.46l1.89-3.19l3.61-0.82l-0.34-3.69L23,12z M9.38,16.01L7,13.61c-0.39-0.39-0.39-1.02,0-1.41 l0.07-0.07c0.39-0.39,1.03-0.39,1.42,0l1.61,1.62l5.15-5.16c0.39-0.39,1.03-0.39,1.42,0l0.07,0.07c0.39,0.39,0.39,1.02,0,1.41 l-5.92,5.94C10.41,16.4,9.78,16.4,9.38,16.01z" />
              </g>
            </svg>
            </Tooltip> : null }
          </div>
        ) : ( ""
        )} */}
        <div className='col-md-3 col-6 mb-4 product-card'>
          <div className="bnb-card">
            <div>
              <img
                src={props.data.image}
                alt=""
                width='100%'
                height='100%'
                className="bnb-card-image mb-2"
              />
            </div>
            <div className="pl-1 pr-2 bnb-card-desc">
              <div className='seller-info-circle'>
                <span style={{float:'right'}}>
                  <span id={'Popover' + props.itemId} style={{color:'rgba(0,0,0,0.8)'}} 
                    onMouseEnter={handlePopupOpen} onMouseLeave={handlePopupClose} 
                    className='fa fa-info-circle' />
                </span>
              </div>

              <Popover className='popup' isOpen={popupOpen} placement='bottom' target={'Popover' + props.id} >
                <PopoverBody>
                    {/* <Avatar src={props.data.sellerImage} alt='sellerimage' /> */}
                    <p style={{fontWeight:'bold'}}>Seller Name: {props.data.sellerName}</p>
                    {/* <p>Item posted on: {datePosted} </p> */}
                </PopoverBody>            
              </Popover>

              {/* <h6 className="listings-card-title">
                <a className='product-name' style={{textDecoration:'none', color:'black'}} href={`/pgdetails/${props.data.productId}`} >{title}</a>
              </h6> */}
              <Typography variant='body2' color='textPrimary' className='mb-2'>{props.data.location}</Typography>
              <Typography display='inline' variant='body1' className='product-name mr-2' >{title}</Typography>
              {props.data.category === 'Second Hand Product' ? 
                  <Typography display='inline' className='product-cat' variant='caption' color='textPrimary'>({props.data.category})</Typography> 
                : <Typography display='inline' className='product-rating' color='textPrimary' variant='body2'><span className='fa fa-star' /> {props.data.rating} </Typography>
              }
                  <Typography variant='body2' className='product-price' color='textPrimary'><span className='fa fa-sm fa-rupee-sign'/> {parseInt(props.data.itemPrice,10)} /month </Typography>
            </div>
          </div>
          <hr />
        </div>
      </> 
    );
  }


export default ListingsCard;
