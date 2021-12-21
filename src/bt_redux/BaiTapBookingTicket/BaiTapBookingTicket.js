import React, { Component } from 'react';
import "./BaiTapBookingTicket.css";
import ThongTinDatGhe from "./ThongTinDatGhe";
import HangGhe from "./HangGhe";
import DanhSachGheData from '../../Data/danhSachGhe.json';

export default class BaiTapBookingTicket extends Component {
    renderHangGhe = () => {
        //Này nó render ra hàng dọc theo trong lập trình là như vậy
        return DanhSachGheData.map((hangGhe, index) => {
            return <div key={index} >
                <HangGhe hangGhe={hangGhe} soHangGhe={index}/>
            </div>
        });
    }

    render() {
        return (
            <div style={
                {
                    position: 'fixed',
                    width: '100%',
                    height: '100%',
                    backgroundImage: "url('./img/bookingTicket/bgmovie.jpg')",
                    backgroundSize: '100%'
                }
            }>
                <div style={
                    {
                        position: 'fixed',
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)'
                    }
                }>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-8 text-center'>
                                <h1 className='text-warning' style={{fontSize: '50px'}}>
                                    ĐẶT VÉ XEM PHIM CYBERLEARN.VN
                                </h1>

                                <div className='mt-3 text-light' style={{fontSize:'25px'}}>Màn Hình</div>

                                <div    
                                    className='mt-2' 
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',   
                                        justifyContent: 'center'
                                    }}
                                >
                                    <div className='screen'></div>
                                    {this.renderHangGhe()}
                                </div>
                                
                            </div>
                            <div className='col-4'>
                                <h1 className='text-light mt-3' style={{fontSize: '35px'}}>
                                    DANH SÁCH GHẾ BẠN CHỌN
                                </h1>

                                <ThongTinDatGhe/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
