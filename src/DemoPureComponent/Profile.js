import React, { Component, PureComponent } from "react";

export default class Profile extends PureComponent {
  //không được lạm dụng PureComponent
  //chỉ dùng khi có props truyền vào là primitive type hoặc ko có cái nào hết
  render() {
      console.log('load');
    return (
      <div className="card bg-dark ">
       <img style={{width:200, height:300}} className="card-img-top" src="https://media.doisongphapluat.com/695/2021/3/27/hot-girl-so-huu-vong-1-108cm-khang-dinh-ban-sexy-chu-khong-hu-02.jpg" alt="hot girl" />
          <div className="card-body text-white">
            <h3 >Số lượng tim <i className="fa fa-heart"></i> ({this.props.like.soLuong})</h3>
            <h4 className="card-title">Họ tên: Lê Thị A</h4>
            <p className="card-text">Tuổi: 18</p>
          </div>
      </div>
    );
  }
}
