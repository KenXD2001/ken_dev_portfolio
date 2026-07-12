import { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
  const bigBallRef = useRef(null);
  const smallBallRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const bigBall = bigBallRef.current;
    const smallBall = smallBallRef.current;
    if (!bigBall || !smallBall) return;

    const onMove = (e) => {
      gsap.to(bigBall, 0.4, {
        x: e.pageX - 15,
        y: e.pageY - 15,
      });
      gsap.to(smallBall, 0.1, {
        x: e.pageX - 5,
        y: e.pageY - 7,
      });
    };

    const onHover = () => {
      gsap.to(bigBall, 0.3, { scale: 4 });
    };
    const onHoverOut = () => {
      gsap.to(bigBall, 0.3, { scale: 1 });
    };

    const hoverSelector = "a, button, input, textarea, [data-cursor-hover]";
    const bindHoverables = () => {
      document.querySelectorAll(hoverSelector).forEach((el) => {
        el.removeEventListener("mouseenter", onHover);
        el.removeEventListener("mouseleave", onHoverOut);
        el.addEventListener("mouseenter", onHover);
        el.addEventListener("mouseleave", onHoverOut);
      });
    };
    bindHoverables();

    const observer = new MutationObserver(bindHoverables);
    observer.observe(document.body, { childList: true, subtree: true });

    document.body.addEventListener("mousemove", onMove);

    return () => {
      document.body.removeEventListener("mousemove", onMove);
      observer.disconnect();
      document.querySelectorAll(hoverSelector).forEach((el) => {
        el.removeEventListener("mouseenter", onHover);
        el.removeEventListener("mouseleave", onHoverOut);
      });
    };
  }, []);

  return (
    <div className="cursor">
      <div ref={bigBallRef} className="cursor__ball cursor__ball--big">
        <svg height="30" width="30">
          <circle cx="15" cy="15" r="12" strokeWidth="0" />
        </svg>
      </div>
      <div ref={smallBallRef} className="cursor__ball cursor__ball--small">
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="4" strokeWidth="0" />
        </svg>
      </div>
    </div>
  );
};

export default Cursor;
