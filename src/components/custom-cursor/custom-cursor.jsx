import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const bigBall = useRef(null);
  const smallBall = useRef(null);

  useEffect(() => {
    const onMouseMove = (e) => {
      gsap.to(bigBall.current, {
        duration: 0.4,
        x: e.clientX - 15,
        y: e.clientY - 15,
      });
      gsap.to(smallBall.current, {
        duration: 0.1,
        x: e.clientX - 5,
        y: e.clientY - 5,
      });
    };

    const onMouseOver = (e) => {
      const to = e.target.closest(".hoverable");
      const from = e.relatedTarget?.closest?.(".hoverable");
      if (to && to !== from) {
        bigBall.current.classList.add("hovering");
        smallBall.current.classList.add("hovering");
        gsap.to(bigBall.current, { duration: 0.3, scale: 4 });
      }
    };

    const onMouseOut = (e) => {
      const from = e.target.closest(".hoverable");
      const to = e.relatedTarget?.closest?.(".hoverable");
      if (from && from !== to) {
        bigBall.current.classList.remove("hovering");
        smallBall.current.classList.remove("hovering");
        gsap.to(bigBall.current, { duration: 0.3, scale: 1 });
      }
    };

    let rafId;
    const checkOverlap = () => {
      const bigX = gsap.getProperty(bigBall.current, "x") + 15;
      const bigY = gsap.getProperty(bigBall.current, "y") + 15;
      const smallX = gsap.getProperty(smallBall.current, "x") + 5;
      const smallY = gsap.getProperty(smallBall.current, "y") + 5;
      const distance = Math.sqrt((bigX - smallX) ** 2 + (bigY - smallY) ** 2);
      smallBall.current.classList.toggle("overlapping", distance < 12);
      rafId = requestAnimationFrame(checkOverlap);
    };
    rafId = requestAnimationFrame(checkOverlap);

    document.body.addEventListener("mousemove", onMouseMove);
    document.body.addEventListener("mouseover", onMouseOver);
    document.body.addEventListener("mouseout", onMouseOut);

    return () => {
      cancelAnimationFrame(rafId);
      document.body.removeEventListener("mousemove", onMouseMove);
      document.body.removeEventListener("mouseover", onMouseOver);
      document.body.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  return (
    <div className="cursor">
      <div className="cursor__ball cursor__ball--big" ref={bigBall}>
        <svg height="30" width="30">
          <circle cx="15" cy="15" r="12" strokeWidth="0"></circle>
        </svg>
      </div>
      <div className="cursor__ball cursor__ball--small" ref={smallBall}>
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
        </svg>
      </div>
    </div>
  );
};

export default CustomCursor;
