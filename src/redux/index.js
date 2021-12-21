import { combineReducers } from "redux";
import userReducer from "./reducers/user";
import BaiTapOanTuXiReducer from "./reducers/BaiTapOanTuXiReducer";
import BaiTapBookingTicketReducer from "./reducers/BaiTapBookingTicketReducer";
//Tạo ra cái vùng màu xanh như hình á
const rootReducer = combineReducers({
    //Có 3 cục nhỏ thì có các child reducer
    //tùy mức độ project nó như thế nào thì có
    userReducer,
    BaiTapOanTuXiReducer,
    BaiTapBookingTicketReducer
});

export default rootReducer;