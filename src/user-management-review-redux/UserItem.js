import React, { Component } from "react";
import { connect } from "react-redux";
import { 
    deleteUser,
    editUser
} from "../redux/actions";

 class UserItem extends Component {
    deleteUser = (user) => {
        this.props.deleteUser(user);
    }

    //User của props
    editUser = (user) => {
        this.props.editUser(user);
    }

    render() {
        const { user } = this.props;
        return (
            <tr>
                <td>{user.fullname}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.type}</td>
                <td>
                    <button
                        className="btn btn-info mr-2"
                        data-toggle="modal"
                        data-target="#modelIdUser"
                        onClick={
                            () => {
                                this.editUser(user);
                            }
                        }
                    >
                        Edit
                    </button>
                    <button 
                        className="btn btn-danger"
                        onClick={
                            () => {
                                this.deleteUser(user);
                            }
                        }
                    >
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//         user: state.userReducer.userEdit,
//     };
// };

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: (user) => {
            dispatch(deleteUser(user));
        }, 
        editUser: (user) => {
            dispatch(editUser(user));
        }
    };
};

export default connect(null, mapDispatchToProps)(UserItem);




