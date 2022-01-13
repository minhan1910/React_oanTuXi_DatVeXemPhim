import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

// export default function Ex5UseTransition() {
//   let [arrItem, setArrayItem] = useState([
//     { id: 1, title: "FrontEndOnline", content: "cyberlearn" },
//     { id: 2, title: "FrontEndOfflline", content: "cybersoft" },
//     { id: 3, title: "FrontEndTuXa", content: "cybersoft" },
//   ]);

//   const propsUseTransition = useTransition(arrItem, item => item.id, {
//     //Component từ vị trí trước khi render
//     from: { transform: "translate3d(0, -40px, 0)" },
//     //Component tại thời điểm render
//     enter: { transform: "translate3d(0, 0px, 0)" },
//     leave: { transform: "translate3d(0, -40px, 0)" },
//     config: {duration: 2000 },
//   });
  
//   const renderItem = () => {
//     return propsUseTransition.map(({props, item, key}, index) => {
//       return (
//         <animated.div
//           style={props}
//           key={index}
//           className="bg-dark text-white p-3 mt-2"
//         >
//           <h1>{item.title}</h1>
//           <p>{item.content}</p>
//         </animated.div>
//       );
//     });
//   };

//   return <div className="container">{renderItem()}</div>;
// }

// const arr = [
//     { text: 1, key: 1 },
//     { text: 2, key: 2 },
//     { text: 3, key: 3 }
//   ];
  
//   export default function Ex5UseTransition() {
//     const [items] = useState(arr);
//     const transitions = useTransition(items, (item) => item.key, {
//       from: { transform: "translate3d(0,-40px,0)" },
//       enter: { transform: "translate3d(0,0px,0)" },
//       leave: { transform: "translate3d(0,-40px,0)" }
//     });
//     return transitions.map(({ item, props, key }) => (
//       <animated.div key={key} style={props}>
//         {item.text}
//       </animated.div>
//     ));
//   }