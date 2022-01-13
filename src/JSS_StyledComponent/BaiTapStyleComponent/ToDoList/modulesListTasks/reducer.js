
import * as actionTypes from "./consts";

const initialState = {
    loading: false,
    data: null, 
    error: null,
}

const ListAllToDoListReducerAPI = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TODOLIST_REQUEST: {
            return {
                ...state,
                loading: !state.loading,              
            }; 
        }

        case actionTypes.TODOLIST_SUCCESS: {
            return { 
                ...state,
                data: action.payload,
            };
        }

        case actionTypes.TODOLIST_FAILED: {            
            return {
                ...state,
                error: action.payload,
            };
        }

        default:
            return {...state};
    }
}

export default ListAllToDoListReducerAPI;