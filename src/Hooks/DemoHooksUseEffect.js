import React, { useState, useEffect } from "react";
import ChildUseEffect from "./ChildUseEffect";

export default function DemoHooksUseEffect() {
  const [number, setNumber] = useState(1);
  const [like, setLike] = useState(1);
  console.log(like);
  //chạy sau khi giao diện render thay cho didUpdate và didMount 
  //cho mỗi trường hợp
//   useEffect(() => {
//     console.log('didMount');
//     console.log('didUpdate');
//   });

  //Cách viết thay thế cho componentDidMount
  useEffect(() => {
    console.log('didMount');
  }, []);

  //Cách viết thay thế componentDidUpdate
  useEffect(() => {
    console.log('didUpdate khi number hoặc like thay đổi');
  }, [number, like]); // number là giá trị bị thay đổi sau khi useEffect nó chạy

  console.log('render');

  const handleIncrease = () => {
    let newNumber = number + 1;
    setNumber(newNumber);
  };

  return (
    <div className="m-5">
      <button onClick={() => {
          setLike(like + 1);
      }}>Like</button>
      <div className="card text-left" style={{width:250, height:300}}>
        <img style={{width:200, height:200}} className="card-img-top" src="https://storage.oxii.vn/Cache/Sites/OXII/Storage/Images/2019/2/26/1920/ke-ni-nang-hotgirl-lanh-lung-khong-bao-gio-nhoen-mieng-cuoi-anh-2_957_651_82.jpg" alt="picture" />
        <div className="card-body">
          <h4 className="card-title text-danger">{number}</h4>
        </div>
      </div>

      <button className="btn btn-success" onClick={handleIncrease}>
        +
      </button>

      {like === 1 ? <ChildUseEffect/> : ''}
    </div>
  );
}
