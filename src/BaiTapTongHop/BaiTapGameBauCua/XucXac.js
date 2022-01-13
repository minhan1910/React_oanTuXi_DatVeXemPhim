import React, { Fragment, useEffect } from "react";
import './XucXacItem.css';
import { useSpring, animated } from "react-spring";
export default function XucXac(props) {
  const { xucXacItem } = props;
  const [propsDice, apiPropsDice] = useSpring(() => ({
    to: {
      xyz: [1800, 1800, 1800]
    },
    from: {
      xyz: [0, 0, 0]
    },
    config: { duration: 1000 },
  }));

  useEffect(() => {
    apiPropsDice.start({reset: true});
  });

  return (
    <Fragment>
      <div className="scene ml-5">
        <animated.div className="cube" style={{
            transform: propsDice.xyz.to((x, y, z) => `translateZ(-20px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`)
          }}
        >
          <div className="cube__face front">
            <img style={{ width: "100%" }} src={xucXacItem.hinhAnh} alt="123" />
          </div>
          <div className="cube__face back">
            <img style={{ width: '100%' }} src="./img/BaiTapGameBauCua/bau.png" alt="123" />
          </div>
          <div className="cube__face left">
            <img  style={{ width: '100%' }} src="./img/BaiTapGameBauCua/ga.png" alt="123" />
          </div>
          <div className="cube__face right">
            <img style={{ width: '100%' }} src="./img/BaiTapGameBauCua/nai.png" alt="123" />
          </div>
          <div className="cube__face bottom">
            <img  style={{ width: '100%' }} src="./img/BaiTapGameBauCua/tom.png" alt="123" />
          </div>
          <div className="cube__face top">
            <img  style={{ width: '100%' }} src="./img/BaiTapGameBauCua/cua.png" alt="123" />
          </div>
        </animated.div>
      </div>
    </Fragment>
  );
}
