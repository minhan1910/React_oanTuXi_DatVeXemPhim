import React, { useReducer } from "react";

const initialCart = [{ id: 1, name: "IPhone", price: 1000, quantity: 1 }];

const cartReducer = (state, action) => {
  switch (action.type) {
    case "addToCart": {
      //Do tình bất biến nên phải clone ra cái mới nó mới hiểu được
      //   let cartUpdate = [...state];

      //   let index = cartUpdate.findIndex(
      //     (itemCart) => itemCart.id === action.item.id
      //   );

      //   if (index !== -1) {
      //       cartUpdate[index].quantity += 1;
      //   } else {
      //       const itemCart = {...action.item, quantity: 1};
      //       cartUpdate.push(itemCart);
      //   }

      //   return cartUpdate;

      //================================================================
      //Có thể viét như sau:

      let index = state.findIndex((item) => item.id === action.item.id);
      if (index !== -1) {
        state[index].quantity += 1;
        return [...state];
      }
      return [...state, {...action.item, quantity: 1}];
    }
    default:
      return [...state];
  }
};

const arrProduct = [
  { id: 1, name: "IPhone", price: 1000 },
  { id: 2, name: "Note 10 plus", price: 5000 },
  { id: 3, name: "Huawei P20", price: 1200 },
];

export default function DemoUseReducer(props) {
  //Này như setState mà cái này nó nâng cao hơn
  //vd như nhận object nào đó và có xử lý bên trong nó
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  const addToCart = (itemClick) => {
    let action = {
      type: "addToCart",
      item: itemClick,
    };
    //dispatch dùng để setState
    dispatch(action);
  };

  return (
    <div className="container">
      <div className="row">
        {arrProduct.map((item, index) => {
          return (
            <div className="col-4" key={index}>
              <div className="card tetx-left">
                <img
                  className="card-img-top"
                  src="https://picsum.photos/200/180"
                  alt={index}
                />
                <div className="card-body">
                  <h4 className="card-title">{item.name}</h4>
                  <p className="card-text">{item.price}</p>
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      addToCart(item);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <h3>Giỏ hàng</h3>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>
            <th>quantity</th>
            <th>total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product, index) => {
            return (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.total}</td>
                <td>
                  <button className="btn btn-danger">X</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
