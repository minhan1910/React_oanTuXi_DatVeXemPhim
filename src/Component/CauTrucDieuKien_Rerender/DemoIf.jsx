import React, { Component } from 'react'

export default class DemoIf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            userName: ""
        };
    }

    //Thuộc tính
    
    //Cách 1: Dùng phương thức kết hợp if để xác định nội dung render ra giao diện
    // renderContent = () => {
    //     if(this.isLogin) { // isLogin === true => Người dùng đã đăng nhập
    //         this.userName = 'An'
    //         return (
    //             <div>
    //                 Hello {this.userName} <button>Logout</button>
    //             </div>
    //         );
    //     }

    //     return (
    //         <div>
    //             <button>Login</button>
    //         </div>
    //     );
    // }


    login = () => {
        this.setState({
            isLogin: true,
            userName: 'MinhAn'
        })
        console.log(this.state);
    }

    logout = () => {
        this.setState({
            isLogin: false,
            userName: ''
        })
    }

    //Phương thức render của component DemoIf
    render() {
        return (
            <div>
                {/* {this.renderContent()} */}
                {
                    this.state.isLogin === true ? <div> Hello {this.userName} <button onClick={this.logout}>Logout</button></div> : 
                                <div><button onClick={this.login}>Login</button></div>
                } 
            </div>
        )
    }
}
