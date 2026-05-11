import { useEffect, useRef } from "react";

export function useAutoScroll(ref, speed = 0.5) {
  const frame = useRef();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let paused = false;

    const onTouchStart = () => (paused = true);
    const onTouchEnd = () => (paused = false);

    el.addEventListener("touchstart", onTouchStart);
    el.addEventListener("touchend", onTouchEnd);

    const animate = () => {
      if (!paused) {
        el.scrollLeft += speed;

        // loop reset (because you doubled items)
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }

      frame.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frame.current);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [ref, speed]);
}
