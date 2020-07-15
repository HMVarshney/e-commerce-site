import * as ActionTypes from './actionTypes';

const dataRequest = () => ({
    type: ActionTypes.DATA_REQUEST
});

const dataSuccess = (data) => ({
    type: ActionTypes.DATA_SUCCESS,
    payload: data,
});

const dataFailed = (error) => ({
    type: ActionTypes.DATA_FAILED,
    payload: error,
});


const fetchData = () => (dispatch) => {
    dispatch(dataRequest());

    return fetch('https://us-central1-ecommerce001.cloudfunctions.net/productData/api/read')
            .then(async(data)=>{
                const products = await data.json()
                return products;
            })
            .then((products)=>{
                dispatch(dataSuccess(products))
            })
            .catch(error=>{
                dispatch(dataFailed(error));
                console.log(error);
            })
};


export { fetchData };