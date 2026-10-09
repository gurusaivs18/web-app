
import { useEffect, useRef } from "react";

export function useAutoScroll(ref, speed = 0.2) {
  const frame = useRef(null);
  const paused = useRef(true);
  const resumeTimer = useRef(null);
  const isRunning = useRef(false);
  const initialized = useRef(false);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const pause = () => {
      paused.current = true;
      clearTimeout(resumeTimer.current);
    };

    const resume = (delay = 0) => {
      clearTimeout(resumeTimer.current);

      resumeTimer.current = setTimeout(() => {
        paused.current = false;
      }, delay);
    };

    const loopReset = () => {
      const half = el.scrollWidth / 2;

      if (el.scrollLeft >= half) {
        el.scrollLeft -= half;
      } else if (el.scrollLeft < 0) {
        el.scrollLeft += half;
      }
    };

    const animate = () => {
      if (!paused.current && !isDragging.current) {
        el.scrollLeft += speed;
        loopReset();
      }

      frame.current = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!isRunning.current) {
            isRunning.current = true;

            // Start from middle of duplicated content
            if (!initialized.current) {
              initialized.current = true;

              requestAnimationFrame(() => {
                el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
              });
            }

            setTimeout(() => {
              paused.current = false;

              if (!frame.current) {
                frame.current = requestAnimationFrame(animate);
              }
            }, 0);
          } else {
            paused.current = false;
          }
        } else {
          paused.current = true;
        }
      },
      {
        threshold: 0.4,
      },
    );

    observer.observe(el);

    const onMouseDown = (e) => {
      isDragging.current = true;
      startX.current = e.pageX;
      startScroll.current = el.scrollLeft;

      pause();

      el.style.cursor = "grabbing";
      el.style.userSelect = "none";
    };

    const onMouseMove = (e) => {
      if (!isDragging.current) return;

      const dx = e.pageX - startX.current;

      el.scrollLeft = startScroll.current - dx;

      loopReset();
    };

    const onMouseUp = () => {
      if (!isDragging.current) return;

      isDragging.current = false;

      el.style.cursor = "grab";
      el.style.userSelect = "";

      resume(1200);
    };

    const onTouchStart = (e) => {
      startX.current = e.touches[0].clientX;
      startScroll.current = el.scrollLeft;

      pause();
    };

    const onTouchMove = (e) => {
      const dx = e.touches[0].clientX - startX.current;

      el.scrollLeft = startScroll.current - dx;

      loopReset();
    };

    const onTouchEnd = () => {
      resume(1200);
    };

    const isFinePointer = window.matchMedia("(pointer: fine)").matches;

    const onMouseEnter = () => {
      if (isFinePointer) pause();
    };

    const onMouseLeave = () => {
      if (isFinePointer && !isDragging.current) {
        resume(300);
      }
    };

    if (isFinePointer) {
      el.style.cursor = "grab";
    }

    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseup", onMouseUp);
    el.addEventListener("mouseleave", onMouseLeave);
    el.addEventListener("mouseenter", onMouseEnter);

    el.addEventListener("touchstart", onTouchStart, {
      passive: true,
    });

    el.addEventListener("touchmove", onTouchMove, {
      passive: true,
    });

    el.addEventListener("touchend", onTouchEnd);

    window.addEventListener("mouseup", onMouseUp);

    return () => {
      cancelAnimationFrame(frame.current);
      clearTimeout(resumeTimer.current);

      observer.disconnect();

      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("mouseleave", onMouseLeave);
      el.removeEventListener("mouseenter", onMouseEnter);

      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);

      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [ref, speed]);
}
