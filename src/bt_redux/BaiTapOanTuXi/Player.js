import React, { Component } from 'react'
import { connect } from "react-redux";

class Player extends Component {
    render() {
        // console.log(this.props.mangDatCuoc);
        const { mangDatCuoc } = this.props;
        return (
            <div className='text-center playerGame'>
                <div className='theThink'>
                    <img style={{transform: 'rotate(120deg)'}}   className='mt-4' width={100} height={100} 
                    //Tìm ra thằng object nào rồi . tới hinhAnh
                    src={mangDatCuoc.find(item => item.datCuoc).hinhAnh} 
                    alt={mangDatCuoc.find(item => item.datCuoc).hinhAnh} />
                </div>
                <div className='speech-bubble'></div>
                <img
                    style={
                        {
                            width:150,
                            height:150
                        }
                }
                src='./img/gameOanTuXi/player.png' alt='./img/gameOanTuXi/player.png'/>

                <div className='row'>
                    {
                        mangDatCuoc?.map((item, index) => {
                            
                            //binding nó thì nó phải là object mới binding được
                            let border = {};
                            if(item.datCuoc) {
                                border = {border: "3px solid orange"};
                            }
                            
                            return (
                                <div  className='col-4 btnItem' key={item.ma}>
                                    <button onClick={() => {
                                        this.props.datCuoc(item.ma);
                                    }} style={border}>
                                        <img width={50} height={50} src={item.hinhAnh} alt={item.hinhAnh} />
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangDatCuoc: state.BaiTapOanTuXiReducer.mangDatCuoc
    }
}

const mapDispatchToProps = dispatch => {
    return {
        datCuoc: (datCuoc) => {
            const action = {
                type: "CHON_KEO_BUA_BAO",
                datCuoc
            }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Player);