import React, { useState, useMemo, useCallback } from "react";
import ChildUseMemo from "./ChildUseMemo";

export default function DemoHooksUseMemo(props) {
  const [like, setLike] = useState(1);
  
  const renderCart = () => {
      const cart = [
        {
          id: 1,
          name: "iphone",
          price: 1000,
        },
        {
          id: 2,
          name: "htc phone",
          price: 2000,
        },
        {
          id: 3,
          name: "lg iphone",
          price: 3000,
        },
      ];
      return cart;
  }
  const cartMemo = useMemo(renderCart, []);

  return (
    <div className="m-5">
      Like: {like} !
      <br />
      <span
        onClick={() => {
          setLike(like + 1);
        }}
        style={{ cursor: "pointer", color: "red", fontSize: 35 }}
      >
          Click Me !!
      </span>
      <ChildUseMemo cart={cartMemo}/>
    </div>
  );
}
