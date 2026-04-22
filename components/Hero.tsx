import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-left">
        <div className="hero-eyebrow">CRISOFI &nbsp;—&nbsp; GOLDEN HOUR COLLECTION</div>
        <h1 className="hero-oro">ORO</h1>
        <p className="hero-subtitle">A concentrated golden goat&apos;s milk soak, born from the warmth of the Mediterranean.</p>
        <div className="hero-rule" />
        <div className="hero-meta">VANILLA &nbsp;·&nbsp; BERGAMOT &nbsp;·&nbsp; JASMINE &nbsp;·&nbsp; CEDAR</div>
      </div>
      <div className="hero-right">
        <div className="hero-img-wrap">
          <Image
            src="/images/hero.jpeg"
            alt="ORO golden milk soak in a luxury bathroom"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center top', filter: 'brightness(0.75) saturate(0.9)', opacity: 0, animation: 'fadeIn 2s 0.2s forwards' }}
          />
          <div className="hero-img-overlay" />
        </div>
      </div>
    </section>
  );
}
