import React, { Component } from "react";
import Profile from './Profile';
export default class DemoPureComponent extends Component {
  state = {
    like: {soLuong: 0}, //nếu ở đây là object hoặc array thì thẳng PureComponent nó sẽ ko hiểu được
             // này nó sẽ dùng cho primitive tốt hơn
  };

  likeImage = () => {
    let currentLike = this.state.like;
    currentLike.soLuong += 1;
    this.setState({
        //Dùng cách này cho PureComponent nếu đủ hiểu sâu thì chơi nó
        //và ko nên lạm dụng như vậy
        like: {...currentLike},
    })
    // this.setState({
    //     like: currentLike,
    // })
  }

  render() {
    return (
      <div className="container">
        <h3 className="text-center">Profile Lê Thị A</h3>
        <Profile like={this.state.like}/>
        <br/>
        <div className="card text-white bg-default">
          <h3 style={{color:"red",}}>Số lượt thả tim ({this.state.like.soLuong})</h3>
          <div className="card-body">
            <button className="btn" onClick={() => this.likeImage()} style={{color:"red", border:"3px solid red", outline:"none"}}>Thả tim <i className="fa fa-heart"></i></button>
          </div>
        </div>
      </div>
    );
  }
}
