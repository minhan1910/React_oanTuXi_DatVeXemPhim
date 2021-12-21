import React, { Component } from 'react';
import { connect } from "react-redux";
class KetquaTroChoi extends Component {
    render() {
        const {ketQua, soBanThang, soBanChoi} = this.props;
        return (
            <div>
                <div className='display-4 text-warning'>{ketQua}</div>
                <div className='display-4 text-success'>Số bàn thắng: <span className='text-warning'>{soBanThang}</span></div>
                <div className='display-4 text-success'>Tổng Số bàn chơi: <span className='text-warning'>{soBanChoi}</span></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ketQua: state.BaiTapOanTuXiReducer.ketQua,
        soBanThang: state.BaiTapOanTuXiReducer.soBanThang,
        soBanChoi: state.BaiTapOanTuXiReducer.soBanChoi,
    }
}

export default connect(mapStateToProps, null)(KetquaTroChoi);