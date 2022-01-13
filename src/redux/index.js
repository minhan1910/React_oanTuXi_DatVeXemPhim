import { combineReducers } from "redux";
import userReducer from "./reducers/user";
import BaiTapOanTuXiReducer from "./reducers/BaiTapOanTuXiReducer";
import BaiTapBookingTicketReducer from "./reducers/BaiTapBookingTicketReducer";
import {QuanLySinhVienReducer} from "./reducers/QuanLySinhVienReducer";
import ToDoListReducer from "./reducers/ToDoListReducer";
import ListAllToDoListReducerAPI from "../JSS_StyledComponent/BaiTapStyleComponent/ToDoList/modulesListTasks/reducer";
import FacebookReducer from "./reducers/FacebookReducer";
import BaiTapGameBauCuaReducer from "./reducers/BaiTapGameBauCuaReducer";
//Tạo ra cái vùng màu xanh như hình á
const rootReducer = combineReducers({
    //Có 3 cục nhỏ thì có các child reducer
    //tùy mức độ project nó như thế nào thì có
    userReducer,
    BaiTapOanTuXiReducer,
    BaiTapBookingTicketReducer,
    QuanLySinhVienReducer,
    ToDoList: ToDoListReducer,
    ListAllToDoList: ListAllToDoListReducerAPI,
    FacebookReducer,
    BaiTapGameBauCuaReducer,
});

export default rootReducer;