import React, { Component } from "react";
import { connect } from "react-redux";
import { getKeyword } from "../redux/actions";

class Search extends Component {
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

const mapDispatchToState = (dispatch) => {
    return {
        getKeyword: (key) => {
            dispatch(getKeyword(key));
        }
    };
};

export default connect(null, mapDispatchToState) (Search);