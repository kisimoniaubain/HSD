export default function PageHero({ tag, title, intro, image, align = 'left' }) {
  return (
    <section className="page-hero section-shell">
      <div className="page-hero__inner">
        <div className={`page-hero__content ${align === 'center' ? 'centered' : ''}`}>
          {tag ? <span className="eyebrow">{tag}</span> : null}
          <h1>{title}</h1>
          {intro ? <p>{intro}</p> : null}
        </div>
        {image ? (
          <div className="page-hero__media">
            <img src={image} alt={title} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
