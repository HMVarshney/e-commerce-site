import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

//css
import '../assets/css/home.css'

const Home = (props) => {
    return(
        <>
        <div className='cover-photo mt-1'>
            <div className='cover'>
            </div>

            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-lg-6 col-12'>
                        <img width='100%' src='/assets/images/Model1.jpg' alt='cover-pic' />
                        <div style={{position:'absolute', bottom:'50px',left:'38%'}}>
                            <div>
                                <Button variant='contained'>Shop Women</Button>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-12 mt-lg-0 mt-2'>
                        <img width='100%' src='/assets/images/Model2.jpg' alt='cover-pic' />
                        <div style={{position:'absolute', bottom:'50px',left:'40%'}}>
                            <div>
                                <Button variant='contained'>Shop Men</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

const stateToProps = (state) => ({
    userName: state.userDetails.uid
})

export default (connect(stateToProps)(Home));