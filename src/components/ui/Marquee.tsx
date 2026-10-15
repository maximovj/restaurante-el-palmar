const items = [
  { icon: 'fa-fish', text: 'Mariscos frescos del día' },
  { icon: 'fa-fire', text: 'Parrilla al carbón' },
  { icon: 'fa-cocktail', text: 'Coctelería de autor' },
  { icon: 'fa-wine-glass', text: 'Vinos del Valle de Guadalupe' },
];

export function Marquee() {
  const loop = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {loop.map((it, i) => (
          <span key={i}>
            <i className={`fas ${it.icon}`} /> {it.text}
          </span>
        ))}
      </div>
    </div>
  );
}