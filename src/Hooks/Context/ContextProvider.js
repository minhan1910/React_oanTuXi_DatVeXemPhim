import React, {useReducer} from 'react'

export const context = React.createContext();
const initialCart = [];
const cartReducer = (state, action) => {
    switch (action.type) {
      case "addToCart": {
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

export default function ContextProvider(props) {
    let [cart, dispatch] = useReducer(cartReducer, initialCart);

    //store giống như rootReducer
    const store = {
        cartReducer: [cart, dispatch],
        //
    }

    //Dùng context bao bọc tất cả component bên trong (cụ thể là App)
    return (
        <context.Provider value={store}>
            {props.children}
        </context.Provider>
    )
}
