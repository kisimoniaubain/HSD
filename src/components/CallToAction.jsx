import { Link } from 'react-router-dom';

export default function CallToAction({ eyebrow = 'Take action', title, description, primaryLabel = 'Donate', primaryTo = '/donate', secondaryLabel = 'Explore work', secondaryTo = '/what-we-do' }) {
  return (
    <section className="cta-section section-shell">
      <div className="cta-inner">
        <span className="eyebrow light">{eyebrow}</span>
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
        <div className="cta-actions">
          <Link to={primaryTo} className="btn btn-primary light-btn">{primaryLabel}</Link>
          <Link to={secondaryTo} className="btn btn-secondary light-btn-secondary">{secondaryLabel}</Link>
        </div>
      </div>
    </section>
  );
}
