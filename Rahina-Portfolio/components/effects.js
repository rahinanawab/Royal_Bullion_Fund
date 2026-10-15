// Scroll reveal + count-up numbers (hero stats)
function initEffects() {
  var cleanups = [];
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.__rvOk = true;

  /* 1) Scroll reveal: elements fade/slide in once, in small staggered groups */
  var SEL = '.skill-card,.cert-card:nth-child(-n+9),.timeline-item,.edu-card,.about-points div,.about-copy p,.section-label,.section h2,.section-head p,.contact-box,.project-card:nth-child(-n+6)';
  var targets = [].slice.call(document.querySelectorAll(SEL));
  if (!('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      var n = 0;
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.style.setProperty('--d', Math.min(n, 5) * 0.08 + 's');
        n++;
        en.target.classList.add('in');
        io.unobserve(en.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    targets.forEach(function (el) { io.observe(el); });
    cleanups.push(function () { io.disconnect(); });
  }

  /* 2) Count-up for the hero numbers (3.5+, 45+, 10+) */
  var stats = document.querySelector('.stats');
  if (stats && !reduce) {
    var nums = [].slice.call(stats.querySelectorAll('strong'));
    var countUp = function (el, delay) {
      el.dataset.final = el.dataset.final || el.textContent.trim();
      var m = el.dataset.final.match(/^(\d+(?:\.\d+)?)(.*)$/);
      if (!m) return;
      var end = parseFloat(m[1]);
      var suf = m[2];
      var dec = (m[1].split('.')[1] || '').length;
      var fmt = function (v) { return v.toFixed(dec) + suf; };
      var dur = 1800, t0 = null, raf = 0;
      el.textContent = fmt(0);
      var step = function (ts) {
        if (t0 === null) t0 = ts;
        var p = Math.min(1, (ts - t0) / dur);
        var e = 1 - Math.pow(1 - p, 4);
        el.textContent = fmt(end * e);
        if (p < 1) { raf = requestAnimationFrame(step); }
        else { el.textContent = el.dataset.final; el.classList.add('stat-done'); }
      };
      var to = setTimeout(function () { raf = requestAnimationFrame(step); }, delay);
      cleanups.push(function () {
        clearTimeout(to); cancelAnimationFrame(raf);
        el.textContent = el.dataset.final; el.classList.remove('stat-done');
      });
    };
    var run = function () { nums.forEach(function (el, i) { countUp(el, 650 + i * 170); }); };
    if ('IntersectionObserver' in window) {
      var sio = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) { sio.disconnect(); run(); }
      }, { threshold: 0.4 });
      sio.observe(stats);
      cleanups.push(function () { sio.disconnect(); });
    } else { run(); }
  }

  return function () { cleanups.forEach(function (fn) { fn(); }); };
}

export default initEffects;
