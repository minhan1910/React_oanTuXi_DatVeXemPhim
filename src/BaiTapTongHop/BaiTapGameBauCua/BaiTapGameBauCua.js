import React from 'react'
import DiemCuoc from './DiemCuoc';
import DanhSachCuoc from './DanhSachCuoc';
import DanhSachXucXac from './DanhSachXucXac';
import './XucXacItem.css';

export default function BaiTapGameBauCua(props) {
    return (
        <div id="BaiTapGameBauCua" className="container-fluid" style={{marginTop: 0}}>
            <DiemCuoc/>

            <div className="row">
                <div className="col-8">
                    <DanhSachCuoc/>
                </div>
                <div className="col-4">
                    <DanhSachXucXac/>
                </div>
            </div>
        </div>
    )
}






