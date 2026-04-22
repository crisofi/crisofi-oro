import Image from 'next/image';

const specs = [
  { label: 'FORMAT', value: 'Golden powder crystals' },
  { label: 'YIELD', value: '8 oz / 227 g per vessel' },
  { label: 'ORIGIN', value: 'Mediterranean-inspired' },
  { label: 'KEY ACTIVES', value: "Goat's milk, botanical oils" },
];

export default function Product() {
  return (
    <section id="product">
      <div className="product-img-wrap reveal">
        <Image
          src="/images/hero.jpeg"
          alt="ORO golden milk soak in situ"
          fill
          style={{ objectFit: 'cover', filter: 'brightness(0.85)' }}
        />
        <div className="product-img-caption">ORO — GOLDEN GOAT MILK SOAK &nbsp;·&nbsp; 8 OZ / 227G</div>
      </div>
      <div className="product-info reveal">
        <span className="section-eyebrow">THE FORMULA</span>
        <h2>
          Pure goat&apos;s milk.<br />
          <em>Concentrated.</em><br />
          Transformative.
        </h2>
        <p>Unlike diluted bath salts, ORO is a high-potency milk soak. A single pour transforms the water: opaque, silken, deeply nourishing — like slipping into warmed parchment.</p>
        <div className="product-specs">
          {specs.map(({ label, value }) => (
            <div key={label} className="spec-row">
              <span className="spec-label">{label}</span>
              <span className="spec-val">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
