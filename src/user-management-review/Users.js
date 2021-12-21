import React, { Component } from "react";
import UserItem from "./UserItem";
export default class Users extends Component {
    getuserList = () => {
        return this.props?.userList.map((user) => {
            return <UserItem
                user={user}
                deleteUser={this.props.deleteUser}
                editUser = {this.props.editUser}
                key={user.id}
            />
        });
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Type</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.getuserList()
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}