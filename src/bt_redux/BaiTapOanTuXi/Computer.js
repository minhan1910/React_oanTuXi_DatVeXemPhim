import React, { Component } from 'react';
import { connect } from "react-redux";
class Computer extends Component {
    render() {
        //Nếu trùng tên thì nó sẽ ko load lại cái animation
        //nên phải để thêm Date.now()
        let keyframes = `
            @keyframes randomItem${Date.now()} {
                0% {top: -50px;}
                25% {top: 100px;}
                50% {top: -50px;}
                75% {top: 100px;}
                100% {top: 0;}
            }
        `;

        return (
            <div className='text-center playerGame'>
                <style>
                    {keyframes}
                </style>
                <div className='theThink' style={{postion: 'relative'}}>
                    <img 
                        style={
                            {
                                transform: 'rotate(120deg)', 
                                left: '40%',
                                position: 'absolute', 
                                animation: `randomItem${Date.now()} 0.5s`,
                                
                            }
                        }
                     className='mt-4' 
                     width={100} 
                     height={100} 
                     src={this.props.computer.hinhAnh} 
                     alt={this.props.computer.hinhAnh} />
                </div>
                <div className='speech-bubble'></div>
                <img
                    style={
                        {
                            width:150,
                            height:150
                        }
                }
                src='./img/gameOanTuXi/playerComputer.png' alt='./img/gameOanTuXi/playerComputer.png'/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        computer: state.BaiTapOanTuXiReducer.computer
    }
}

export default connect(mapStateToProps, null)(Computer);
