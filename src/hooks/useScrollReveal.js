

import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const selectors = "[data-reveal], .section-line-reveal";

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    const observed = new WeakSet(); // ← track what's already observed

    const attach = () => {
      document.querySelectorAll(selectors).forEach((el) => {
        if (!observed.has(el)) {
          // ← only observe NEW elements
          observed.add(el);
          io.observe(el);
        }
      });
    };

    // ← wait one frame so opacity:0 paints BEFORE observer fires
    requestAnimationFrame(() => {
      requestAnimationFrame(attach); // double rAF = after browser paint
    });

    const mo = new MutationObserver(attach);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
