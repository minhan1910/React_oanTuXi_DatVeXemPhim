import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import { connect } from "react-redux";
import { resetUserEdit } from "../redux/actions"

 class Home extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="display-4 text-center my-3">User Management Redux
                </h1>
                <div className="d-flex justify-content-between align-items-center">
                    <Search/>
                    <button
                        className="btn btn-success"
                        data-toggle="modal"
                        data-target="#modelIdUser"
                        onClick= {
                            () => {
                                this.props.resetUserEdit();
                            }
                       }
                    >
                        Add User
                    </button>
                </div>
                <Users/>
                <Modal/>
            </div>
        )
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        resetUserEdit: () => {
            dispatch(resetUserEdit());
        }
    }
}

export default connect(null, mapDispatchToState)(Home);
