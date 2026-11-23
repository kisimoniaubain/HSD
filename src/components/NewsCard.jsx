import { Link } from 'react-router-dom';

export default function NewsCard({ article }) {
  return (
    <article className="news-card">
      <img src={article.image} alt={article.title} className="news-card__image" />
      <div className="news-card__body">
        <div className="meta-row">
          <span className="project-tag">{article.category}</span>
          <span className="news-date">{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
        </div>
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
        <div className="news-card__footer">
          <span>By {article.author}</span>
          <Link to={`/blog/${article.slug}`} className="text-link">Read more</Link>
        </div>
      </div>
    </article>
  );
}
