'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

const ContactModal = dynamic(() => import('./ContactModal'), { ssr: false });

const cards = [
  {
    num: '01',
    title: 'In-Room Amenity',
    desc: 'A single jar placed beside the bath. An understated gesture that guests remember long after checkout.',
  },
  {
    num: '02',
    title: 'Spa Integration',
    desc: 'Custom milky bath experiences built around the ORO formula, available as signature treatments.',
  },
  {
    num: '03',
    title: 'Bespoke Gifting',
    desc: 'Custom-packaged sets for guest welcome boxes, wellness kits, and curated amenity programs.',
  },
];

export default function Hotel() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="hotel">
        <span className="section-eyebrow reveal">HOSPITALITY</span>
        <h2 className="hotel-headline reveal">
          For the <em>discerning</em><br />property.
        </h2>
        <p className="hotel-sub reveal">
          ORO is available exclusively for luxury hotels, private villas, and wellness resorts. We partner selectively, where the environment matches the intention.
        </p>
        <div className="hotel-grid">
          {cards.map(({ num, title, desc }) => (
            <div key={num} className="hotel-card reveal">
              <span className="hotel-card-num">{num}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
        <button
          className="cta-btn reveal"
          onClick={() => setModalOpen(true)}
        >
          INQUIRE ABOUT PARTNERSHIP
        </button>
      </section>

      {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
