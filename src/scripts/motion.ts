// Motion layer: scroll reveals, hero typewriter, reading progress bar.
// Everything re-runs after each Astro view transition and respects reduced motion.
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function reveal() {
  const targets = document.querySelectorAll<HTMLElement>(
    "#main-content li.my-6, #main-content h2, #main-content pre, #main-content blockquote, #main-content img:not(#hero-avatar)"
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
    el.style.transitionDelay = `${Math.min(i * 60, 300)}ms`;
    io.observe(el);
  });
}

let typedTimer: ReturnType<typeof setTimeout> | undefined;

function typewriter() {
  clearTimeout(typedTimer);
  const el = document.getElementById("hero-typed");
  if (!el) return;
  const phrases: string[] = JSON.parse(el.dataset.phrases ?? "[]");
  if (phrases.length === 0) return;
  el.classList.add("typed");
  let p = 0;
  let i = phrases[0].length;
  let deleting = true;

  const tick = () => {
    const phrase = phrases[p];
    if (deleting) {
      i--;
      el.textContent = phrase.slice(0, i);
      if (i === 0) {
        deleting = false;
        p = (p + 1) % phrases.length;
      }
      typedTimer = setTimeout(tick, 35);
    } else {
      i++;
      el.textContent = phrases[p].slice(0, i);
      if (i === phrases[p].length) {
        deleting = true;
        typedTimer = setTimeout(tick, 2200);
      } else {
        typedTimer = setTimeout(tick, 55 + Math.random() * 40);
      }
    }
  };
  typedTimer = setTimeout(tick, 1800);
}

function progressBar() {
  document.getElementById("reading-progress")?.remove();
  if (!document.getElementById("article")) return;
  const bar = document.createElement("div");
  bar.id = "reading-progress";
  document.body.appendChild(bar);
  const update = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    bar.style.width = `${Math.min(100, max > 0 ? (h.scrollTop / max) * 100 : 0)}%`;
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}

function run() {
  if (reduce) return;
  reveal();
  typewriter();
  progressBar();
}

run();
document.addEventListener("astro:after-swap", run);
