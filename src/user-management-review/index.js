import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import data from "./data.json";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: data,
            keyword: "",
            userEdit: null
        }
    };

    __findIndex = (id) => this.state.userList.findIndex((user) => (user.id === id) !== -1); 


    handleSubmit = (user) => {
        let userList = [...this.state.userList];
        if(user.id) {
            //UPDATE
            let indexUpdate = this.__findIndex(user.id);
            console.log(indexUpdate);
            userList[indexUpdate] = user;
        } else {    
            //ADD
            let userNew = {...user, id: new Date().getTime()};
            userList.push(userNew);
        }

        this.setState({
            userList,
        })
    };

    handleDeleteUser = (user) => {
        //State lifting up
        const idUser = this.__findIndex(user.id);
        if(idUser !== -1) {
            let userList = [...this.state.userList];
            userList.splice(idUser, 1);
            this.setState({
                userList,
            });
        }
    };

    handleSearch = (keyword) => {
        this.setState({
            keyword,
        })
    }

    //Get informaiton user when u click on Edit button
    handleUserEdit = (userEdit) => {
        this.setState({
            userEdit,
        })
    }

    render() {
        let { userList, keyword } = this.state;
        userList = userList.filter(
            (user) => {
                return user.fullname.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
            }
        );

        return (
            <div className="container">
                <h1 className="display-4 text-center my-3">User Management
                </h1>
                <div className="d-flex justify-content-between align-items-center">
                    <Search 
                        getKeyword = {this.handleSearch}
                    />
                    <button
                        className="btn btn-success"
                        data-toggle="modal"
                        data-target="#modelIdUser"
                        onClick= {
                            () => {
                                this.setState({
                                    userEdit: null
                                })
                            }
                       }
                    >
                        Add User
                    </button>
                </div>
                <Users
                    deleteUser    = {this.handleDeleteUser}
                    userList      = {userList}
                    editUser      = {this.handleUserEdit}
                />
                <Modal
                    getUserSubmit = {this.handleSubmit}
                    userEdit      = {this.state.userEdit}
                />
            </div>
        )
    }
}
