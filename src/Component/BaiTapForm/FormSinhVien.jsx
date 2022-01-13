import React, { Component } from "react";
import { connect } from "react-redux";
class FormSinhVien extends Component {
  state = {
    values: {
      maSv: "",
      hoTen: "",
      email: "",
      soDienThoai: "",
    },
    errors: {
      maSv: "",
      hoTen: "",
      email: "",
      soDienThoai: "",
    },
    valid: false,
  };

  handleValidateForm = (name, value, type, pattern) => {
    let errMessage = "";
    //Check empty
    if (!value.trim()) {
      errMessage = name + " Không được bỏ trống";
    }

    //check email
    if (type === "email") {
      const regex = new RegExp(pattern);
      if (!regex.test(value)) {
        errMessage = name + " Không đúng định dạng";
      }
    }

    if (name === "soDienThoai") {
      const regex = new RegExp(pattern);
      if (!regex.test(value)) {
        errMessage = name + " Không đúng định dạng";
      }
    }

    let values = { ...this.state.values, [name]: value }; //cập nhập giá trị values cho state
    let errors = { ...this.state.errors, [name]: errMessage}; // câp nhập lỗi cho state

    return {
      values,
      errors,
    };
  };

  handleChange = (e) => {
    //Lấy giá trị mỗi lần value input thay đổi người dùng
    let { name, value, type, pattern } = e.target;
    const validator = this.handleValidateForm(name, value, type, pattern);

    //Ví dụ như  this.state['maNv'] = value
    //dùng cái [] để truy xuất vào key của object và thay đổi nó luôn
    //này nó dynamically
    this.setState(
      {
        //   [name]: value,
        ...this.state,
        values: validator.values,
        errors: validator.errors,
      },
      () => {
        this.checkValid();
      }
    );
    
  };

  handleSubmit = (e) => {
    e.preventDefault(); // cản submit khi load lại trang
    this.props.themSinhVien(this.state.values);
  };

  checkValid = () => {
    let valid = true;

    for (let key in this.state.errors) {
      if (this.state.errors[key] !== "" || this.state.values[key] === "") {
        valid = false;
      }
    }

    this.setState({
      ...this.state,
      valid,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header bg-dark text-white">
            <h3>Thông Tin Sinh Viên</h3>
          </div>
          <div className="card-body">
            {/* Ở đây nhấn enter thì nó sẽ bay lên luôn */}
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="form-group col-6">
                  <span>Mã SV</span>
                  <input
                    type="text"
                    className="form-control"
                    name="maSv"
                    value={this.state.values.maSv}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.maSv}</p>
                </div>
                <div className="form-group col-6">
                  <span>Họ Tên</span>
                  <input
                    type="text"
                    className="form-control"
                    name="hoTen"
                    value={this.state.values.hoTen}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.hoTen}</p>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-6">
                  <span>Email</span>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    value={this.state.values.email}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.email}</p>
                </div>
                <div className="form-group col-6">
                  <span>Số Điện Thoại</span>
                  <input
                    type="text"
                    className="form-control"
                    name="soDienThoai"
                    pattern="^(0|[1-9][0-9]*)$"
                    value={this.state.values.soDienThoai}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.soDienThoai}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-right">
                  {this.state.valid ? (
                    <button type="submit" className="btn btn-success">
                      Thêm Thành Viên
                    </button>
                  ) : (
                    <button type="submit" className="btn btn-success" disabled>
                      Thêm Thành Viên
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    themSinhVien: (sinhVien) => {
      const aciton = {
        type: "THEM_SINH_VIEN",
        sinhVien,
      };
      dispatch(aciton);
    },
  };
};

export default connect(null, mapDispatchToProps)(FormSinhVien);
