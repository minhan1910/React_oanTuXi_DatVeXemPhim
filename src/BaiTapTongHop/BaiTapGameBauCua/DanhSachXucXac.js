import React from 'react'
import XucXac from './XucXac';
import {useSelector, useDispatch} from "react-redux";

export default function DanhSachXucXac(props) {

    const dispatch = useDispatch();

    const mangXucXac = useSelector(state => state.BaiTapGameBauCuaReducer.mangXucXac);
    
    return (
        <div className="mt-2 ml-5" >
            <div className="bg-white" style={{width: 300, height: 300, borderRadius: 150, paddingLeft:10}}>
                <div className="row">
                    <div className="col-12 text-right" style={{marginLeft: '75px'}}>
                        {/* Bấm ctrl + D rồi CTRL + shift + l quét full content đa con trỏ */}
                        <XucXac xucXacItem={mangXucXac[0]}/>
                    </div>
                </div>
                <div className="row" style={{marginTop: '-47px', marginLeft: 11}}>
                <div className="col-4 text-right" >
                        <XucXac  xucXacItem={mangXucXac[1]}/>
                    </div>
                    <div className="col-4 text-right">
                        <XucXac  xucXacItem={mangXucXac[2]}/>
                    </div>
                </div>
            </div>
            <div style={{marginLeft: '28%', marginTop: '5%'}}>
                <button
                    onClick={() => {
                        dispatch({
                            type: 'PLAY_GAME_BAU_CUA',
                        })
                    }} 
                className="btn btn-success p2" style={{fontSize: '25px'}}>Xốc</button>
            </div>
        </div>
    )
}
