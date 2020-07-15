import React, { useEffect } from 'react';
import ListingsCard from './listingsCard';
import { fetchData } from '../../redux/actions/dataActions';
import { connect } from 'react-redux';


const Listings = (props) => {

    const { data, loading, error } = props.data;

    useEffect(()=>{
        props.dispatch(fetchData());
    },[]);

    console.log(props.data);

    if(loading){
        return <div>Loading</div>
    } else if(error) {
        return <div>Error</div>
    } else {
        return(
            <div className='container'>
                <div className='row'>
                    {data.map((product)=>(
                        <ListingsCard key={product.itemId} data={product} />
                    ))}
                </div>
            </div>
        )
    }
};

const stateToProps = (state) => ({
    data:{
        data: state.data.data,
        loading: state.data.dataLoading,
        error: state.data.dataError,
    }
});
 
export default (connect(stateToProps)(Listings));