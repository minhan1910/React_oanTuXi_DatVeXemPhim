import React, { Component } from "react";
import UserItem from "./UserItem";
import { connect } from "react-redux";

 class Users extends Component {
    getuserList = () => {
        //this.props nó ko có nhận từ index nữa mà nhận từ cái userReducer
        let {userList, keyword} = this.props;
        userList = userList.filter(
            (user) => {
                return user.fullname.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
            }
        );

        return userList?.map((user) => {
            return <UserItem
                user={user}
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

//nên nhớ có cái state
const mapStateToProps = (state) => {
    return {
        //key: value
        //state này là rootReducer
        userList: state.userReducer.userList,
        keyword: state.userReducer.keyword
    }
}

export default connect(mapStateToProps, null)(Users);