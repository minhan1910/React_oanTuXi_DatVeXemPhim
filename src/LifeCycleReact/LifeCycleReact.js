import React, { Component } from 'react'
import ChildComponent from './ChildComponent';
export default class LifeCycleReact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 1,
            product: {
                id: 1,
                name: 'iphone',
            }
        }

        console.log('contructor');
    }

    //Được gọi khi component này được sử dụng trên DOM (giao diện của app)
    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps');
        return null;
    }

    //ko khuyến khích sử dụng mà nên dùng PureComponent
    // shouldComponentUpdate() {
    //     return true;
    // }

    //Được gọi khi setState hoặc props
    shouldComponentUpdate(newProps, currentState) {
        //return true thì chạy tiếp các lifecycle còn lại
        //ngược lại thì sẽ dừng các life cycle khác
        return true;
    }

    render() {
        console.log('renderParent');
        return (
            <div>
                <h1>Parent Component</h1>
                <span>Number: {this.state.number}</span>
                <button className="btn btn-success" onClick={() => {
                    this.setState({
                        number: this.state.number + 1,
                    });
                }}>+</button>

                <button className="btn btn-success" onClick={() => {
                    //Phải clone ra object mới thì nó mơi hiểu được
                    let newProduct = {...this.state.product};
                    newProduct.name = 'samsung galaxy note 10';
                    this.setState({
                        product: newProduct,
                    })
                }}>Change name product</button>

                <h3>new Product parent: {this.state.product.name}</h3>
                <ChildComponent product={this.state.product}/>
            </div>
        )
    }

    //Được gọi sau render và chỉ gọi 1 lần duy nhất (trạng thái moiunting)
    componentDidMount() {
        console.log('componentDidMount');
    }

    //Lần đầu sẽ không gọi, chỉ gọi khi setState hoặc thay đổi Props
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }


}
