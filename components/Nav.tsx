'use client';

import { useState, useEffect } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav id="main-nav" className={scrolled ? 'scrolled' : ''}>
      <a href="#" className="nav-brand">CRISOFI</a>
      <ul className="nav-links">
        <li><a href="#story">THE RITUAL</a></li>
        <li><a href="#ingredients">NOTES</a></li>
        <li><a href="#product">THE SOAK</a></li>
        <li><a href="#hotel">PARTNERSHIPS</a></li>
      </ul>
      <button className="nav-mobile-toggle" aria-label="Navigation menu">MENU</button>
    </nav>
  );
}
