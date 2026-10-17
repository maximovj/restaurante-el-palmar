export function SectionHeader({eyebrow, title, highlight}:{eyebrow: string, title: string, highlight: string}) {
    return (
        <div className="section-header">
            <span className="eyebrow"></span>
            {eyebrow}
            <h2>
                {title}&nbsp;<em>{highlight}</em>
            </h2>
            <div className="divider"></div>
        </div>
    );
}
