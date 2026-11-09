(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function init() {
    // Scroll reveals for post cards and post body blocks
    if (!reduce && window.AOS) {
      var i = 0;
      document.querySelectorAll('#post-list .card-wrapper').forEach(function (el) {
        el.setAttribute('data-aos', 'fade-up');
        el.setAttribute('data-aos-delay', String(Math.min(i++ * 60, 300)));
      });
      document.querySelectorAll('.content > h2, .content > h3, .content > pre, .content > blockquote, .content > img, .content > table').forEach(function (el) {
        el.setAttribute('data-aos', 'fade-up');
      });
      AOS.init({ duration: 600, once: true, offset: 40, easing: 'ease-out-cubic' });
    }

    // Typewriter on the sidebar tagline
    var sub = document.querySelector('.site-subtitle');
    if (sub && window.Typed) {
      var text = sub.textContent.trim();
      if (reduce) return;
      sub.textContent = '';
      new Typed(sub, {
        strings: [text, 'Debugging stories.', 'Things I learned today.', text],
        typeSpeed: 40,
        backSpeed: 20,
        backDelay: 1800,
        smartBackspace: true,
        showCursor: true,
        cursorChar: '|'
      });
    }

    // Reading progress bar on post pages
    if (document.querySelector('article .content')) {
      var bar = document.createElement('div');
      bar.id = 'reading-progress';
      document.body.appendChild(bar);
      var onScroll = function () {
        var h = document.documentElement;
        var max = h.scrollHeight - h.clientHeight;
        bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
