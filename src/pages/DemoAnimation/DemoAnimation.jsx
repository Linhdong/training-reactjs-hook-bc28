import React, { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";

export default function DemoAnimation() {
  const [styles, api] = useSpring(() => ({ opacity: 1, color: "red", fontSize: 20 }));
  const [toggle, setToggle] = useState(false);

  //   // Update spring with new props
  //   api.start({ opacity: toggle ? 1 : 0 });
  //   // Stop animation
  //   api.stop();

    useEffect(() => {
        return () => {
            api.stop();
        }
    })

  return (
    <div>
      <button
        className="btn btn-success"
        onClick={() => {
            api.start({ opacity: 1, color: 'blue', fontSize: 40});
        }}
      >
        Hello
      </button>

      <button
        className="btn btn-danger mx-2"
        onClick={() => {
            api.start({ opacity: 1, color: 'red', fontSize: 10});
        }}
      >
        Hello
      </button>

      <animated.div style={styles}>i will fade</animated.div>
    </div>
  );
}
