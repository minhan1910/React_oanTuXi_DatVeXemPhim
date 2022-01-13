import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {useSpring, animated} from "react-spring";

export default function DiemCuoc() {
  const dispatch = useDispatch();
  const tongDiem = useSelector(state => state.BaiTapGameBauCuaReducer.tongDiem);
  const [resetAnimated, apiResetAnimated] = useSpring(() => ({
    from: {scale: 0.5},
    to: {scale: 1},
  }));
  return (
    <div>
      <h3 className="text-center" style={{ color: "rgb(46,232,47,1)", marginTop: 0, fontSize: '48px'}}>
        Game Bầu Cua CyberLearn
      </h3>

      <div className="text-center mt-4">
        <span
          style={{ fontSize: "15px", borderRadius: "5%" }}
          className="p-3 text-white bg-danger"
        >
          Tiền thưởng: <span className="text-warning">{tongDiem.toLocaleString()}$</span>
        </span>
      </div>

      <div className="text-center mt-4">
       <animated.button
          style={{transform: resetAnimated.scale.to((scale) => `scale(${scale})`), fontSize: "15px", borderRadius: "5%", border: "none", outline: "none"}}
          onClick={() => {
            apiResetAnimated.start({
              reset: true,
            })
            dispatch({
              type: 'CHOI_LAI',
            })
          }}
          className="p-2 text-white bg-success"
        >
          Chơi lại
        </animated.button>
      </div>
    </div>
  );
}
