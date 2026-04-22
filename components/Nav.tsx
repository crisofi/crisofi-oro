'use client';

import { useState, useEffect } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <nav id="main-nav" className={[scrolled ? 'scrolled' : '', menuOpen ? 'menu-open' : ''].join(' ')}>
      <a href="#" className="nav-brand" onClick={close}>CRISOFI</a>
      <ul className="nav-links">
        <li><a href="#story" onClick={close}>THE RITUAL</a></li>
        <li><a href="#ingredients" onClick={close}>NOTES</a></li>
        <li><a href="#product" onClick={close}>THE SOAK</a></li>
        <li><a href="#hotel" onClick={close}>PARTNERSHIPS</a></li>
      </ul>
      <button
        className="nav-mobile-toggle"
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? 'CLOSE' : 'MENU'}
      </button>
    </nav>
  );
}
