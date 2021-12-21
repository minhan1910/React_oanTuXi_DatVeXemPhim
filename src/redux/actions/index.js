import {
    GET_KEYWORD,
    DELETE_USER,
    SUBMIT_USER,
    EDIT_USER
} from "../constants";

const getKeyword = (key) => {
    return {
        type: GET_KEYWORD,
        payload: key
    }
}

const deleteUser = (user) => {
    return {
        type: DELETE_USER,
        payload: user
    }
}

const editUser = (user) => {
    return {
        type: EDIT_USER,
        payload: user
    }
}

const resetUserEdit = () => {
    return {
        type: EDIT_USER,
        payload: null
    }
}

const getUserSubmit = (user) => {
    return {
        type: SUBMIT_USER,
        payload: user
    };
}


export  {
    getKeyword,
    deleteUser,
    editUser,
    getUserSubmit,
    resetUserEdit
}

