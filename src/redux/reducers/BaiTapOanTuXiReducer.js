const stateDefault = {
    mangDatCuoc: [
        {ma: 'keo', hinhAnh: './img/gameOanTuXi/keo.png', datCuoc: true},
        {ma: 'bua', hinhAnh: './img/gameOanTuXi/bua.png', datCuoc: false},
        {ma: 'bao', hinhAnh: './img/gameOanTuXi/bao.png', datCuoc: false},
    ],
    ketQua: "I'm Iron Man, I love you 3000 !!",
    soBanThang: 0,
    soBanChoi: 0,
    computer: {ma: 'keo', hinhAnh: './img/gameOanTuXi/keo.png'}
}

const BaiTapOanTuXiReducer = (state=stateDefault, action) => {
    switch (action.type) {
        case "CHON_KEO_BUA_BAO": {
            let mangDatCuocUpdate = [...state.mangDatCuoc];
            //Vừa set lại true cho cái mình cần và load lại cái update datCuoc
            mangDatCuocUpdate = mangDatCuocUpdate.map((item) => {
                if(item.ma === action.datCuoc) {
                    return {...item, datCuoc: true};
                }
                return {...item, datCuoc: false};
            });

            state.mangDatCuoc = mangDatCuocUpdate;
            return {...state};
        }
        
        case "RAN_DOM": {
            //Cho chạy từ 0 -> 2
            let randomIndex     = Math.floor(Math.random() * 3);
            state.computer      = {...state.mangDatCuoc[randomIndex]};
            return {...state};
        }

        case "END_GAME": {
            let player      = state.mangDatCuoc.find((item) => item.datCuoc);
            let computer    = state.computer;

            switch (computer.ma) {
                case "bao":
                    if(player.ma === "bua") {
                        state.ketQua = "Bạn Thua !!!";
                    } else if(player.ma === "bao") {
                        state.ketQua = "Bạn Hòa !!!";
                    } else {
                        ++state.soBanThang;
                        state.ketQua = "I'm Iron Man, I love you 3000 !!";
                    }
                    break;
                case "bua":
                    if(player.ma === "bua") {
                        state.ketQua = "Bạn Hòa !!!";
                    } else if(player.ma === "keo") {
                        state.ketQua = "Bạn Thua !!!";
                    } else {
                        ++state.soBanThang;
                        state.ketQua = "I'm Iron Man, I love you 3000 !!";
                    }
                    break;

                case "keo":
                    if(player.ma === "bao") {
                        state.ketQua = "Bạn Thua !!!";
                    } else if(player.ma === "keo") {
                        state.ketQua = "Bạn Hòa !!!";
                    } else {
                        ++state.soBanThang;
                        state.ketQua = "I'm Iron Man, I love you 3000 !!";
                    }
                    break;
            
                default:
                    break;
            }
            ++state.soBanChoi;
            
            return {...state};
        }
    
        default:
            return {...state};
    }
}

export default BaiTapOanTuXiReducer;