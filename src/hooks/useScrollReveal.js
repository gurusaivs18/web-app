/**
 * useScrollReveal.js  –  JSB Group
 * ----------------------------------
 * Drop-in scroll animation system.
 *
 * USAGE IN ANY COMPONENT:
 *   import { useScrollReveal } from "../hooks/useScrollReveal";
 *   useScrollReveal();          // call once per page
 *
 * MARKUP:
 *   <section data-reveal="up">...</section>
 *   <h2 data-reveal="blur" data-delay="200">Title</h2>
 *   <div data-reveal="left" data-delay="300">Card</div>
 *
 * data-reveal values:
 *   up | down | left | right | scale | fade | blur | clip
 *
 * data-delay values (ms):
 *   100 | 150 | 200 | 250 | 300 | 350 | 400 | 450 | 500 | 600 | 700 | 800
 */

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
