import { Link, useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { articles } from '../data/articles';

export default function BlogDetails() {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <section className="section-shell">
        <div className="max-width-shell">
          <h2>Article not found.</h2>
          <Link to="/blog" className="btn btn-primary">Back to blog</Link>
        </div>
      </section>
    );
  }

  const related = articles.filter((item) => item.slug !== article.slug).slice(0, 2);

  return (
    <>
      <section className="section-shell article-hero">
        <div className="max-width-shell">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Blog', to: '/blog' }, { label: article.title, to: `/blog/${article.slug}` }]} />
          <div className="article-head">
            <span className="project-tag">{article.category}</span>
            <h1>{article.title}</h1>
            <div className="article-meta">
              <span>By {article.author}</span>
              <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
          </div>
          <img src={article.image} alt={article.title} className="article-image" />
        </div>
      </section>

      <section className="section-shell">
        <div className="max-width-shell article-body">
          {article.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <div className="share-row">
            <a href="#" className="btn btn-secondary">Share on X</a>
            <a href="#" className="btn btn-secondary">Share on LinkedIn</a>
          </div>
        </div>
      </section>

      <section className="section-shell soft-surface">
        <div className="max-width-shell">
          <div className="section-heading-row">
            <div>
              <span className="eyebrow">Related stories</span>
              <h2>More reading from the HSD journal.</h2>
            </div>
          </div>
          <div className="news-grid">
            {related.map((item) => (
              <article key={item.slug} className="news-card related-news-card">
                <img src={item.image} alt={item.title} className="news-card__image" />
                <div className="news-card__body">
                  <span className="project-tag">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <Link to={`/blog/${item.slug}`} className="text-link">Read article</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
