import React from 'react';
import { CircularProgress } from '@material-ui/core';

const SpinnerLoader = () => {
    return(
        <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
            <CircularProgress />
        </div>
    );
};

export default SpinnerLoader;