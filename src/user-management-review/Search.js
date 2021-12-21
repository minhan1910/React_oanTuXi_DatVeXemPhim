import React, { Component } from "react";

export default class Search extends Component {


    getKeyWord = (event) => {
        const { value } = event.target;
        this.props.getKeyword(value);
    }   

    render() {
        return <input 
            type="text" 
            className="form-control mb-3 w-50"
            onChange={this.getKeyWord}
        />;
    }
}