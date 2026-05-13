/**
 * useAutoScroll.js  –  JSB Group
 * ─────────────────────────────────────────────────────────
 * Smooth infinite auto-scroll with:
 *   • Mouse-drag  (click + drag left/right on desktop)
 *   • Touch-swipe (finger drag on mobile / tablet)
 *   • Arrow buttons (external: just call scrollBy())
 *   • Hover pause  (desktop only, via CSS pointer check)
 *
 * The track MUST contain doubled items so the loop reset
 * is seamless (scroll resets at scrollWidth / 2).
 */

import { useEffect, useRef } from "react";

export function useAutoScroll(ref, speed = 0.5) {
  const frame      = useRef();
  const paused     = useRef(false);
  const resumeTimer= useRef();

  // drag state
  const isDragging = useRef(false);
  const startX     = useRef(0);
  const startScroll= useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    /* ── helpers ── */
    const pause  = () => { paused.current = true;  clearTimeout(resumeTimer.current); };
    const resume = (delay = 0) => {
      clearTimeout(resumeTimer.current);
      resumeTimer.current = setTimeout(() => { paused.current = false; }, delay);
    };

    /* ─────────────────────────────────────────────────
       MOUSE drag  (desktop)
    ───────────────────────────────────────────────── */
    const onMouseDown = (e) => {
      isDragging.current  = true;
      startX.current      = e.pageX;
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
      resume(1200); // resume after 1.2s so user can read the card
    };

    /* ─────────────────────────────────────────────────
       TOUCH drag  (mobile / tablet)
    ───────────────────────────────────────────────── */
    const onTouchStart = (e) => {
      startX.current      = e.touches[0].clientX;
      startScroll.current = el.scrollLeft;
      pause();
    };

    const onTouchMove = (e) => {
      const dx = e.touches[0].clientX - startX.current;
      el.scrollLeft = startScroll.current - dx;
      loopReset();
    };

    const onTouchEnd = () => {
      resume(1500); // resume after 1.5s
    };

    /* ─────────────────────────────────────────────────
       HOVER pause  (desktop — pointer: fine)
       We check matchMedia so touch screens are excluded
    ───────────────────────────────────────────────── */
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;

    const onMouseEnter = () => { if (isFinePointer) pause(); };
    const onMouseLeave = () => { if (isFinePointer && !isDragging.current) resume(300); };

    /* ─────────────────────────────────────────────────
       INFINITE LOOP RESET
    ───────────────────────────────────────────────── */
    const loopReset = () => {
      const half = el.scrollWidth / 2;
      if (el.scrollLeft >= half)      el.scrollLeft -= half;
      else if (el.scrollLeft < 0)     el.scrollLeft += half;
    };

    /* ─────────────────────────────────────────────────
       RAF ANIMATION LOOP
    ───────────────────────────────────────────────── */
    const animate = () => {
      if (!paused.current && !isDragging.current) {
        el.scrollLeft += speed;
        loopReset();
      }
      frame.current = requestAnimationFrame(animate);
    };

    /* Initial cursor hint on desktop */
    if (isFinePointer) el.style.cursor = "grab";

    /* Attach */
    el.addEventListener("mousedown",  onMouseDown);
    el.addEventListener("mousemove",  onMouseMove);
    el.addEventListener("mouseup",    onMouseUp);
    el.addEventListener("mouseleave", onMouseLeave); // covers drag-leave too
    el.addEventListener("mouseenter", onMouseEnter);

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove",  onTouchMove,  { passive: true });
    el.addEventListener("touchend",   onTouchEnd);

    // global mouseup so drag release outside el still works
    window.addEventListener("mouseup", onMouseUp);

    animate();

    return () => {
      cancelAnimationFrame(frame.current);
      clearTimeout(resumeTimer.current);

      el.removeEventListener("mousedown",  onMouseDown);
      el.removeEventListener("mousemove",  onMouseMove);
      el.removeEventListener("mouseup",    onMouseUp);
      el.removeEventListener("mouseleave", onMouseLeave);
      el.removeEventListener("mouseenter", onMouseEnter);

      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove",  onTouchMove);
      el.removeEventListener("touchend",   onTouchEnd);

      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [ref, speed]);
}