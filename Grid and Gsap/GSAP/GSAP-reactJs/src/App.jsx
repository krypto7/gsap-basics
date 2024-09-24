import { useGSAP } from "@gsap/react";
import React, { useRef, useState } from "react";
import gsap from "gsap";

function App() {
  // const boxRef = useRef();
  // const [circle, setCircle] = useState(0);
  // const [xBox, setxBox] = useState(0);

  // const random = gsap.utils.random(-500, 500, 10);
  // const boxRandom = gsap.utils.random(-300, 200, 5);

  // useGSAP(() => {
  //   gsap.to(".circle", {
  //     x: circle,
  //     duration: 0.5,
  //   });
  //   gsap.to(boxRef.current, {
  //     rotate: xBox,
  //     x: xBox,
  //     duration: 1,
  //   });
  // }, [circle, xBox]);

  // const handleCircle = () => {
  //   setCircle(random);
  //   setxBox(boxRandom);
  // };

  const boxRef = useRef();

  const { contextSafe } = useGSAP();
  const rotateBox = contextSafe(() => {
    gsap.to(boxRef.current, {
      rotate: 360,
    });
  });

  return (
    // <main>
    //   {/* <div ref={ref} className="box"></div> */}
    //   <button onClick={handleCircle}>Animate</button>
    //   <div className="circle"></div>
    //   <div className="box" ref={boxRef}></div>
    // </main>
    <main>
      <button onClick={rotateBox}>Animate</button>
      <div ref={boxRef} className="box"></div>
    </main>
  );
}

export default App;
