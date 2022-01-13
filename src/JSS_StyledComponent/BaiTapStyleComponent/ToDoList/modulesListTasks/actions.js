import * as actionTypes from "./consts";
import {getAllTasksApi} from "../../../../services/todolistService";

export const actFetchData = () => {
    return (dispatch) => {
        //request
        dispatch(actToDoListRequest());

        //fetch data
        getAllTasksApi('ALL')
          .then(data => actToDoListSuccess(data))
          .catch(err => actToDoListFail(err));
    }
};

export const actToDoListRequest = () => ({
  type: actionTypes.TODOLIST_REQUEST,
});

export const actToDoListSuccess = (data) => ({
  type: actionTypes.TODOLIST_SUCCESS,
  payload: data,
});

export const actToDoListFail = (error) => ({
  type: actionTypes.TODOLIST_FAILED,
  payload: error,
});
