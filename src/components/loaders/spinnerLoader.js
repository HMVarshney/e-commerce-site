import React from 'react';
import { CircularProgress } from '@material-ui/core';

const SpinnerLoader = () => {
    return(
        <div style={{display: 'flex', justifyContent:'center', alignItems:'center', height:'800px'}}>
            <CircularProgress color='inherit' />
        </div>
    );
};

export default SpinnerLoader;