import React from "react";
import { useSprings, animated } from "react-spring";

export default function Ex3UseSprings() {
  const arrOpacity = [
    { opacity: 0.1, color: "red", content: "FullStack ", num: 100 },
    { opacity: 0.3, color: "green", content: "Backend ", num: 200 },
    { opacity: 0.5, color: "blue", content: "FrontEnd ", num: 300 },
    { opacity: 0.7, color: "orange", content: "CyberLearn ", num: 400 },
    { opacity: 1, color: "purple", content: "CyberSoft ", num: 500 },
  ];

  //Nó trả về cái mảng vs các thuộc tính
  //đã được set up ra
  let propsAnimationUseSprings = useSprings(
    arrOpacity.length,
    arrOpacity.map((item) => {
      return {
        opacity: item.opacity,
        color: item.color,
        content: item.content,
        num: item.num,
        from: {
          opacity: 0,
          color: "black",
          // có cũng được ko có cũng được
          content: item.content,
          num: 0,
        },
        config: {
          duration: 3000,
        },
      };
    })
  );

  const renderContent = (propsAnim, index) => {
    //Cho vào cái mảng thì nó sẽ ra đc h1 và span chứ ko thôi nó sẽ chỉ render ra 1 thẻ duy nhất
    // let resultAnimComponent = [
    //   <animated.h1 style={propsAnim} key={1}>
    //     {propsAnim.num}
    //   </animated.h1>,
    //   <animated.span style={propsAnim} key={2}>
    //     {propsAnim.content}
    //   </animated.span>,
    // ];

    //ra cái mảng thì nó tự render ra
    let resultAnimComponent = [];
    //propsAnim là 1 object trong cái mảng propsAnimationUseSprings
    //nó vẫn duyệt qua cái mảng propsAnimationUseSprings truyền propsAnim vào để xử lý
    for (let key in propsAnim) {
      if(key === 'content' || key === 'num') {
          resultAnimComponent.push(
            <animated.span style={propsAnim} key={1}>
              {propsAnim[key]}
            </animated.span>
          );
      }
    }

    return resultAnimComponent;
  };

  return (
    <div>
      {propsAnimationUseSprings.map((propsAnim, index) => {
        return <div>{renderContent(propsAnim, index)}</div>;
      })}
    </div>
  );
}
