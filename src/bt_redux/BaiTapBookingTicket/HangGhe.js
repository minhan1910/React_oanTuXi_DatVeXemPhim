import React, { Component } from 'react';
import {connect} from "react-redux";
import { datGhe } from '../../redux/actions/acitonsOfBaiTapBookingTicket';
class HangGhe extends Component {
    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {

            let cssGheDaDat = "";
            let disabledGheDaDat = false;
            //Ghế đã đặt rồi
            if(ghe.daDat) {
                cssGheDaDat = 'gheDuocChon';
                disabledGheDaDat = true;
            }

            //Ghế đang đặt
            let cssGheDangDat = '';
            let hasChairInArr = this.props.danhSachGheDangDat.findIndex((gheDangDat) => ghe.soGhe === gheDangDat.soGhe);
            
            if(hasChairInArr !== -1) {
                cssGheDaDat = 'gheDangChon';
            }

            return <button 
            onClick={
                () => {
                    this.props.datGhe(ghe);
                }
            }
            disabled={disabledGheDaDat}  
            className={`ghe ${cssGheDaDat} ${cssGheDangDat}` } key={index} >
                {ghe.soGhe}
            </button>
        });
    }

    renderSoHangDautien = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
            return <button className='rowNumber'>
                {ghe.soGhe}
            </button>
        });
    }

    renderHangGhe = () => {
        if(this.props.soHangGhe === 0) {
            return <div className='ml-4'>
                {this.props.hangGhe.hang} {this.renderSoHangDautien()}
            </div>
        } else {            
            return <div>
                {this.props.hangGhe.hang} {this.renderGhe()}
            </div>
        }
    }

    render() {
        return (
            <div className='text-light text-left ml-3 mt-1' style={{fontSize:23}}>
                {this.renderHangGhe()}    
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachGheDangDat: state.BaiTapBookingTicketReducer.danhSachGheDangDat
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datGhe: (ghe) => {
            dispatch(datGhe(ghe));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);

