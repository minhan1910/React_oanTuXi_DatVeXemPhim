import React, { Component } from "react";
import { connect } from 'react-redux';
import { getUserSubmit } from "../redux/actions";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      fullname: "",
      username: "",
      email: "",
      phoneNumber: "",
      type: "USER"
    }
    this.closeModal = React.createRef();
  }

  handleOnchange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }
  
  //Lifting state up to index
  //đổi thành cái button là nó ko bị refresh lại trang
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.getUserSubmit(this.state);
    // console.log(this.closeModal.current);
    this.closeModal.current.click();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps", nextProps);
    if(nextProps && nextProps.userEdit) {
      const {userEdit} = nextProps;
      this.setState({
        id: userEdit.id,
        fullname: userEdit.fullname,
        username: userEdit.username,
        email: userEdit.email,
        phoneNumber: userEdit.phoneNumber,
        type: userEdit.type
      });
    } else {
      this.setState({
        id: "",
        fullname: "",
        username: "",
        email: "",
        phoneNumber: "",
        type: "USER"
      });
    }
  }

  render() {
    return (
      <div
        className="modal fade"
        id="modelIdUser"
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {this.props.userEdit ? "EDIT USER" : "ADD USER"}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                ref={this.closeModal}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group"> 
                        <label>Username</label>
                        <input 
                          type="text" 
                          className="form-control"
                          name="username"
                          onChange={this.handleOnchange}
                          value={this.state.username}
                        />
                    </div>
                    <div className="form-group"> 
                        <label>Name</label>
                        <input 
                          type="text" 
                          className="form-control"
                          name="fullname"
                          onChange={this.handleOnchange}
                          value={this.state.fullname}  
                        />
                          
                    </div>
                    <div className="form-group"> 
                        <label>Email</label>
                        <input 
                          type="text" 
                          className="form-control"
                          name="email"
                          onChange={this.handleOnchange}
                          value={this.state.email}  
                        />
                          
                    </div>
                    <div className="form-group"> 
                        <label>Phone Number</label>
                        <input 
                          type="text" 
                          className="form-control"
                          name="phoneNumber"
                          onChange={this.handleOnchange}
                          value={this.state.phoneNumber}  
                        />
                          
                    </div>
                    <div className="form-group"> 
                        <label>Type</label>
                        <select 
                          className="form-control"
                          name="type"
                          onChange={this.handleOnchange}
                          value={this.state.type}
                        >
                            <option>USER</option>
                            <option>VIP</option>
                        </select>
                    </div>
                    <button 
                      type="submit" 
                      className="btn btn-success"
                    >
                        Submit
                    </button>
                </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userEdit: state.userReducer.userEdit
  }
}

const mapDispatchToState = (dispatch) => {
  return {
    getUserSubmit: (user) => {
      dispatch(getUserSubmit(user));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToState)(Modal);
