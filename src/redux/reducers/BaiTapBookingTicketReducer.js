
const stateDefault = {
    danhSachGheDangDat: []    
}

const BaiTapBookingTicketReducer = (state=stateDefault, action) => {
    switch (action.type) {
        case "DAT_GHE": {
            let danhSachGheDangDat = [...state.danhSachGheDangDat];
            
            let index =  danhSachGheDangDat.findIndex((ghe) => ghe.soGhe === action.ghe.soGhe);

            if(index === -1) {
                //Add
                danhSachGheDangDat.push(action.ghe);
            } else {   
                //Huy do nhấn lần 2
                danhSachGheDangDat.splice(index, 1);
            }
            state.danhSachGheDangDat = danhSachGheDangDat;
            return {...state}
        }
            
        case "HUY_GHE": {
            let danhSachGheDangDat = [...state.danhSachGheDangDat];
            
            let index =  danhSachGheDangDat.findIndex((ghe) => ghe.soGhe === action.ghe.soGhe);

            if(index !== -1) {
                danhSachGheDangDat.splice(index, 1);
            }
            state.danhSachGheDangDat = danhSachGheDangDat;
            return {...state};
        }
    
        default:
            return {...state};
    }
}

export default BaiTapBookingTicketReducer;