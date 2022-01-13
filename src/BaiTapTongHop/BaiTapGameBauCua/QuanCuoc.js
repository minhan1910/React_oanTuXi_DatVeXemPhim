import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSpring, animated, config } from "@react-spring/web";

export default function QuanCuoc(props) {
  const dispatch = useDispatch();

  const [propsUseSpringIncrease, apiIncrease] = useSpring(() => ({
    from: { scale: 0.5 },
    to: { scale: 1 },
  }));
  const [propsUseSpringDecrease, apiDecrease] = useSpring(() => ({
    from: { scale: 0.5 },
    to: { scale: 1 },
  }));

  const { quanCuoc } = props;

  return (
    <div className="mt-3">
      <img src={quanCuoc.hinhAnh} alt="Bau" style={{ width: "200px" }} />
      <div
        className="bg-success text-center mt-2 pb-2"
        style={{ borderRadius: "10px", width: "200px" }}
      >
        <animated.button
          style={{
            transform: propsUseSpringIncrease.scale.to((scale) => `scale(${scale})`),
          }}
          onClick={() => {
            // api.set({ scale: 1 });
            apiIncrease.start({
              reset: true,
            });
            dispatch({
              type: "DAT_CUOC_BAU_CUA",
              quanCuoc,
              tangGiam: true,
            });
          }}
          className="btn btn-danger mr-3"
        >
          <i className="fa fa-plus"></i>
        </animated.button>
        <span className="mt-2" style={{ color: "yellow", fontSize: 25 }}>
          {quanCuoc.diemCuoc}
        </span>
        <animated.button
          style={{
            transform: propsUseSpringDecrease.scale.to((scale) => `scale(${scale})`),
          }}
          onClick={() => {
            apiDecrease.start({
              reset: true,
            });
            dispatch({
              type: "DAT_CUOC_BAU_CUA",
              quanCuoc,
              tangGiam: false,
            });
          }}
          className="btn btn-danger ml-3"
        >
          -
        </animated.button>
      </div>
    </div>
  );
}
