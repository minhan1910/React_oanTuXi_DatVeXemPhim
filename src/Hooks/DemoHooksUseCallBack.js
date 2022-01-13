import React, { useState, useCallback } from "react";
import ChildUseCallBack from "./ChildUseCallBack";

export default function DemoHooksUseCallBack(props) {
  const [like, setLike] = useState(1);

  const renderNotify = () => {
    return `Bạn đã thả ${like} !`;
  };

  //Nếu ko muốn render lại thì để array rỗng
  const callBackRenderNotify = useCallback(renderNotify, [like]);

  return (
    <div className="mt-5">
      Like: {like}
      <br />
      <span
        onClick={() => {
          setLike(like + 1);
        }}
        style={{ cursor: "pointer", color: "red", fontSize: 35 }}
      >
        Click Me !! 
      </span>
      <br />
      <br />
      <ChildUseCallBack renderNotify={callBackRenderNotify}/>
    </div>
  );
}
