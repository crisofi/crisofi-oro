const notes = [
  {
    num: '01',
    name: 'Vanilla',
    desc: 'Warm, resinous heart. A sense of skin-close comfort, both sensual and grounding.',
  },
  {
    num: '02',
    name: 'Bergamot',
    desc: 'Citrus-bright, with a sunlit edge. The first note of a Mediterranean morning.',
  },
  {
    num: '03',
    name: 'Jasmine',
    desc: 'White floral, night-blooming. A breath of terraced hillsides after dusk.',
  },
  {
    num: '04',
    name: 'Cedar',
    desc: 'Aged, woody, enduring. The base that anchors the ritual in quiet depth.',
  },
];

export default function Ingredients() {
  return (
    <section id="ingredients">
      <span className="section-eyebrow reveal">FRAGRANCE NOTES</span>
      <h2 className="reveal">
        Four notes.<br />One immersion.
      </h2>
      <div className="ingredients-grid">
        {notes.map(({ num, name, desc }) => (
          <div key={num} className="ingredient-card reveal">
            <span className="ingredient-num">{num}</span>
            <div className="ingredient-name">{name}</div>
            <p className="ingredient-desc">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
