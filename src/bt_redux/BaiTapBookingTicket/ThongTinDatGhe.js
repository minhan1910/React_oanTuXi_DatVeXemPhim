import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGhe } from "../../redux/actions/acitonsOfBaiTapBookingTicket";

class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className="mt-5">
          <button className="gheDuocChon"></button>{" "}
          <span className="text-light" style={{ fontSize: "26px" }}>
            Ghế đã đặt
          </span>
          <br />
          <button className="gheDangChon"></button>{" "}
          <span className="text-light" style={{ fontSize: "26px" }}>
            Ghế Đang Chọn
          </span>
          <br />
          <button className="ghe" style={{ marginLeft: "0" }}></button>{" "}
          <span className="text-light" style={{ fontSize: "26px" }}>
            Ghế Chua Đặt
          </span>
        </div>

        <div className="mt-5">
          <table className="table" border="2">
            <thead>
              <tr className="text-light" style={{fontSize:25}}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </thead>

            <tbody className="text-warning">
              {
                this.props.danhSachGheDangDat.map((ghe, index) => { 
                  return (
                    <tr>
                      <td>{ghe.soGhe}</td>
                      <td>{ghe.gia.toLocaleString()}</td>
                      <td>
                        <button
                          onClick={
                            () => {
                              this.props.dispatch(huyGhe(ghe));
                            }
                          }
                        >
                          Hủy
                        </button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
            <tfoot >
              <tr className="text-warning">
                

                <td></td>
                <td>Tổng tiền</td>
                <td>
                  {
                  this.props.danhSachGheDangDat.reduce((total, ghe) => {
                    return total += ghe.gia;                     
                  }, 0)
                }
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
   return {
    danhSachGheDangDat: state.BaiTapBookingTicketReducer.danhSachGheDangDat,
   }
}

export default connect(mapStateToProps)(ThongTinDatGhe);