// import { useState, RefObject, useEffect } from "react";

// export function FollowPointer(ref) {
//   const [point, setPoint] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     if (!ref.current) return;

//     const handlePointerMove = ({ clientX, clientY }) => {
//       const element = ref.current;

//       const x = clientX - element.offsetLeft - element.offsetWidth / 2;
//       const y = clientY - element.offsetTop - element.offsetHeight / 2;
//       // const posX = clientX - element.offsetLeft;
//       // const posY = clientY - element.offsetTop;
//       // const x = (posX / element.clientWidth)* 100;
//       // const y = (posY / element.clientHeight)* 100;
//       // - element.offsetWidth / 2;
//       //  - element.offsetHeight / 2;
//       setPoint({ x, y });
//     };

//     window.addEventListener("pointermove", handlePointerMove);

//     return () => window.removeEventListener("pointermove", handlePointerMove);
//   }, []);

//   return point;
// }
import { useState, useEffect, useCallback } from "react";

export function FollowPointer(ref) {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  const handlePointerMove = useCallback(({ clientX, clientY }) => {
    if (!ref.current) return;

    const element = ref.current;
    const x = clientX - element.offsetLeft - element.offsetWidth / 2;
    const y = clientY - element.offsetTop - element.offsetHeight / 2;
    setPoint({ x, y });
  }, [ref]);

  useEffect(() => {
    if (!ref.current) return;

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [ref, handlePointerMove]);

  return point;
}