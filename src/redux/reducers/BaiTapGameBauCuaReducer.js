//rxreducer tạo nhanh cái reducer

const initialState = {
  danhSachCuoc: [
    { ma: "ga", hinhAnh: "./img/BaiTapGameBauCua/ga.png", diemCuoc: 0 },
    { ma: "bau", hinhAnh: "./img/BaiTapGameBauCua/bau.png", diemCuoc: 0 },
    { ma: "ca", hinhAnh: "./img/BaiTapGameBauCua/ca.png", diemCuoc: 0 },
    { ma: "nai", hinhAnh: "./img/BaiTapGameBauCua/nai.png", diemCuoc: 0 },
    { ma: "cua", hinhAnh: "./img/BaiTapGameBauCua/cua.png", diemCuoc: 0 },
    { ma: "tom", hinhAnh: "./img/BaiTapGameBauCua/tom.png", diemCuoc: 0 },
  ],
  tongDiem: 1000,
  mangXucXac: [
    { ma: "nai", hinhAnh: "./img/BaiTapGameBauCua/nai.png" },
    { ma: "cua", hinhAnh: "./img/BaiTapGameBauCua/cua.png" },
    { ma: "tom", hinhAnh: "./img/BaiTapGameBauCua/tom.png" },
  ],
};

const BaiTapGameBauCuaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DAT_CUOC_BAU_CUA": {
        //tìm trong danhSachCuoc => quân cược nào được click sẽ tăng hoặc giảm điểm
        const danhSachCuocUpdate = [...state.danhSachCuoc];
        const index = danhSachCuocUpdate.findIndex(qc => qc.ma === action.quanCuoc.ma);
        if(index !== -1) {
            if(action.tangGiam && state.tongDiem > 0) {
                //mảng thì nên clone ra mới r đè lại nó mới hiểu được
                danhSachCuocUpdate[index].diemCuoc += 100;
                state.tongDiem -= 100;
            } else if(action.tangGiam === false) {
                if(danhSachCuocUpdate[index].diemCuoc > 0) {
                    danhSachCuocUpdate[index].diemCuoc -= 100;
                    state.tongDiem += 100;
                }
            }
        }
        return {
            ...state,
             danhSachCuoc: [...danhSachCuocUpdate]
        };
    }

    case 'PLAY_GAME_BAU_CUA': {

        const mangXucXacNgauNhien = [];

        const danhSachCuocUpdate  = [...state.danhSachCuoc];
        
        for(let i = 0; i < 3; ++i) {
            //Tạo ra 1 số ngẫu nhiên từ 0 -> 5
            let soNgauNhien = Math.floor(Math.random() * 6);
            const xucXacNgauNhien = {...state.danhSachCuoc[soNgauNhien]};
            mangXucXacNgauNhien.push(xucXacNgauNhien);
        }

        //XỬ lý tăng điểm thưởng
        for(let i = 0; i < mangXucXacNgauNhien.length; ++i) {
            //xử lý nếu trúng con nào đó khi roll
            if(mangXucXacNgauNhien[i].diemCuoc > 0) {
                state.tongDiem += mangXucXacNgauNhien[i].diemCuoc;
            } 
        }

        //reset all diemCuoc afer playing once time
        for(let i=0; i < danhSachCuocUpdate.length; ++i) {
            danhSachCuocUpdate[i].diemCuoc = 0;            
        }

        return {
            ...state,
            mangXucXac: [...mangXucXacNgauNhien],
            danhSachCuoc: [...danhSachCuocUpdate],
        };
    }

    case 'CHOI_LAI': {
        return {
            ...state,
            danhSachCuoc: [...state.danhSachCuoc.map(qc => {
                return {...qc, diemCuoc: 0};
            })],
            tongDiem: 1000,
         };
    }

    default:
      return { ...state};
  }
};

export default BaiTapGameBauCuaReducer;
