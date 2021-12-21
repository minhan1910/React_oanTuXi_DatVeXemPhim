//Child reducer đầu tiên cho cái bài user
let initialState = {
    userList: [
        {
        "id": 1,
        "fullname": "Dinh Phuc Nguyen",
        "username": "dpnguyen",
        "email": "dpnguyen@gmail.com",
        "phoneNumber": "123456789",
        "type": "VIP"
        },
        {
        "id": 2,
        "fullname": "Nguyen Van A",
        "username": "vana",
        "email": "vana@gmail.com",
        "phoneNumber": "123456789",
        "type": "USER"
        }
    ],
    keyword: "",
    userEdit: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_KEYWORD": {
            state.keyword = action.payload;
            return {...state};
        }
            
        case "DELETE_USER": {
            let userList = [...state.userList];
            
            let indexDelete = userList.findIndex((user) => (user.id === action.payload.id));

            if(indexDelete !== -1) {
                userList.splice(indexDelete, 1);
            }

            state.userList = userList;

            return {...state};
        }

        case "EDIT_USER": {
            state.userEdit = action.payload;
            return {...state};
        }

        case "SUBMIT_USER": {
            let userList = [...state.userList];
            
            if(action.payload.id) {
                //Update
                let indexUpdate = userList.findIndex((user) => (user.id === action.payload.id));
                userList[indexUpdate] = action.payload;
            } else {
                //ADD
                userList.push(action.payload);
            }
            state.userList = userList;
            return {...state};
        }
    
        default: {
            return {...state};
        }
    }
}

//ra đc child reducer
export default userReducer;