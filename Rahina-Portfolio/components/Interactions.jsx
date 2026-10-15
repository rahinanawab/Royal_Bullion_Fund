'use client';

import { useEffect } from 'react';
import initEffects from './effects';

// Same behaviour as the original script:
// 1) after "Load less", scroll back to the Load more button
// 2) mobile menu closes on link click / outside click
export default function Interactions() {
  useEffect(() => {
    const cleanups = [];
    cleanups.push(initEffects());

    ['show-more', 'show-more-certs'].forEach((id) => {
      const box = document.getElementById(id);
      if (!box) return;
      const btnWrap = box.parentElement.querySelector('.load-wrap');
      if (!btnWrap) return;

      const onChange = () => {
        if (box.checked) return; // only on "Load less"

        const html = document.documentElement;
        html.style.overflowAnchor = 'none';
        html.style.scrollBehavior = 'auto';

        const goToEnd = () => {
          const y =
            btnWrap.getBoundingClientRect().top +
            window.pageYOffset -
            (window.innerHeight - btnWrap.offsetHeight) / 2;
          window.scrollTo(0, Math.max(0, y));
        };

        goToEnd();
        requestAnimationFrame(() => {
          goToEnd();
          requestAnimationFrame(() => {
            goToEnd();
            html.style.overflowAnchor = '';
            html.style.scrollBehavior = '';
          });
        });
      };

      box.addEventListener('change', onChange);
      cleanups.push(() => box.removeEventListener('change', onChange));
    });

    const menu = document.getElementById('menu-toggle');
    if (menu) {
      const closeMenu = () => { menu.checked = false; };
      const links = document.querySelectorAll('.nav-links a');
      links.forEach((l) => l.addEventListener('click', closeMenu));
      const onDocClick = (e) => {
        if (menu.checked && !e.target.closest('.nav')) menu.checked = false;
      };
      document.addEventListener('click', onDocClick);
      cleanups.push(() => {
        links.forEach((l) => l.removeEventListener('click', closeMenu));
        document.removeEventListener('click', onDocClick);
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
