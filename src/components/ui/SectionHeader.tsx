interface Props {
  eyebrow: string;
  title: string;
  highlight: string;
}

export function SectionHeader({ eyebrow, title, highlight }: Props) {
  return (
    <div className="section-header">
      <span className="eyebrow">{eyebrow}</span>
      <h2>
        {title} <em>{highlight}</em>
      </h2>
      <div className="divider" />
    </div>
  );
}