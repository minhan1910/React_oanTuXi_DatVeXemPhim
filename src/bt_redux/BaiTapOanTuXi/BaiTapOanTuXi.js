import React, { Component } from 'react'
import "./BaiTapOanTuXi.css";
import Computer from './Computer';
import KetquaTroChoi from './KetquaTroChoi';
import Player from './Player';
import { connect } from "react-redux";

class BaiTapOanTuXi extends Component {
    render() {        
        return (
            <div className='gameOanTuXi'>
                <div className='row text-center mt-4'>
                    <div className='col-4'>
                        <Player/>
                    </div>
                    <div className='col-4'>
                        <KetquaTroChoi/>
                        <button onClick={this.props.randomComputerItem } className='btn btn-danger p-3 display-4 mt-4'>Play Game</button>
                    </div>
                    <div className='col-4'>
                        <Computer/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        randomComputerItem: () => {
            let count = 0;
            let repeatRandom = setInterval(() => {
                dispatch({
                    type: "RAN_DOM"
                });
                ++count;
                if(count >= 10) {
                    clearInterval(repeatRandom); 
                    dispatch({
                        type: "END_GAME"
                    })                   
                }
            }, 200);
        }
    }
}

export default connect(null, mapDispatchToProps)(BaiTapOanTuXi);
