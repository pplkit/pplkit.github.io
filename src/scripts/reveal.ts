// Scroll-reveal for post cards and headings. Re-runs after every view transition.
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function reveal() {
  if (reduce) return;
  const targets = document.querySelectorAll<HTMLElement>(
    "#main-content li.border-b, #main-content h2, #main-content pre, #main-content blockquote, #main-content img"
  );
  const io = new IntersectionObserver(
    entries => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: "0px 0px -40px 0px" }
  );
  targets.forEach((el, i) => {
    el.classList.add("reveal");
    el.style.transitionDelay = `${Math.min(i * 50, 250)}ms`;
    io.observe(el);
  });
}

reveal();
document.addEventListener("astro:after-swap", reveal);
