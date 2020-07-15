import * as ActionTypes from '../actions/actionTypes';

const dataReducer = (state={
    dataLoading: false,
    data:[],
    dataError:''
}, action) => {
    switch (action.type) {
        case ActionTypes.DATA_REQUEST:
            return { ...state, dataLoading:true };
    
        case ActionTypes.DATA_SUCCESS:
            return { ...state, data: action.payload, dataLoading: false }

        case ActionTypes.DATA_FAILED:
            return {...state, dataLoading: false, dataError: action.payload}
        default:
            return state
    }
};

export default dataReducer;