// import { useEffect, useRef } from "react";

// export function useAutoScroll(ref, speed = 0.5) {
//   const frame = useRef();

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     let paused = false;

//     const onTouchStart = () => (paused = true);
//     const onTouchEnd = () => (paused = false);

//     el.addEventListener("touchstart", onTouchStart);
//     el.addEventListener("touchend", onTouchEnd);

//     const animate = () => {
//       if (!paused) {
//         el.scrollLeft += speed;

//         // loop reset (because you doubled items)
//         if (el.scrollLeft >= el.scrollWidth / 2) {
//           el.scrollLeft = 0;
//         }
//       }

//       frame.current = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       cancelAnimationFrame(frame.current);
//       el.removeEventListener("touchstart", onTouchStart);
//       el.removeEventListener("touchend", onTouchEnd);
//     };
//   }, [ref, speed]);
// }
import { useEffect, useRef } from "react";

export function useAutoScroll(ref, speed = 0.5, delay = 1500) {
  const frame = useRef();
  const timeout = useRef();
  const isPaused = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const pause = () => {
      isPaused.current = true;
      clearTimeout(timeout.current);
    };

    const resume = () => {
      clearTimeout(timeout.current);
      timeout.current = setTimeout(() => {
        isPaused.current = false;
      }, delay);
    };

    const onUserInteract = () => {
      pause();
      resume();
    };

    // mouse + touch + wheel support
    el.addEventListener("mousedown", onUserInteract);
    el.addEventListener("touchstart", onUserInteract);
    el.addEventListener("wheel", onUserInteract, { passive: true });
    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);

    const animate = () => {
      if (!isPaused.current) {
        el.scrollLeft += speed;

        // loop reset (since you duplicated items)
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }

      frame.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frame.current);

      el.removeEventListener("mousedown", onUserInteract);
      el.removeEventListener("touchstart", onUserInteract);
      el.removeEventListener("wheel", onUserInteract);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);

      clearTimeout(timeout.current);
    };
  }, [ref, speed, delay]);
}
