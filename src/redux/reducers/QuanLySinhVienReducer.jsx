
const stateDefault = {
    mangSinhVien: [{maSv: 1, hoTen: 'nguyễn văn a', soDienThoai: '0916859011', email: 'annogo123@gmail.com'}]
}

export const QuanLySinhVienReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'THEM_SINH_VIEN': {
            const mangSinhVien = [...state.mangSinhVien, action.sinhVien];
            return {
                ...state,
                mangSinhVien,
            }
        }

        default:
            return {...state};
    }
}