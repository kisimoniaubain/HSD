import { useMemo, useState } from 'react';
import PageHero from '../components/PageHero';
import NewsCard from '../components/NewsCard';
import { articles, blogCategories } from '../data/articles';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [visibleCount, setVisibleCount] = useState(4);

  const filteredArticles = useMemo(() => {
    const query = search.trim().toLowerCase();
    return articles.filter((article) => {
      const categoryMatches = selectedCategory === 'All' || article.category === selectedCategory;
      const searchMatches = !query || `${article.title} ${article.excerpt} ${article.content.join(' ')}`.toLowerCase().includes(query);
      return categoryMatches && searchMatches;
    });
  }, [search, selectedCategory]);

  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const featured = articles[0];

  return (
    <>
      <PageHero
        tag="Blog"
        title="Stories, Insights and Updates."
        intro="Explore articles, reflections, and updates that highlight the ideas, communities, and partnerships shaping HSD’s work."
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
      />

      <section className="section-shell">
        <div className="max-width-shell">
          <div className="featured-post">
            <img src={featured.image} alt={featured.title} />
            <div className="featured-post__body">
              <span className="project-tag">{featured.category}</span>
              <h2>{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <div className="news-card__footer">
                <span>{new Date(featured.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                <a href={`/blog/${featured.slug}`} className="text-link">Read article</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell soft-surface">
        <div className="max-width-shell">
          <div className="toolbar-row">
            <div className="category-bar" aria-label="Article categories">
              {blogCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={selectedCategory === category ? 'filter-pill active' : 'filter-pill'}
                  onClick={() => {
                    setSelectedCategory(category);
                    setVisibleCount(4);
                  }}
                >
                  {category}
                </button>
              ))}
            </div>

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="search-input"
              placeholder="Search articles"
              aria-label="Search articles"
            />
          </div>

          <div className="news-grid">
            {visibleArticles.map((article) => (
              <NewsCard key={article.slug} article={article} />
            ))}
          </div>

          {filteredArticles.length > visibleArticles.length ? (
            <div className="load-more-bar">
              <button type="button" className="btn btn-secondary" onClick={() => setVisibleCount((count) => count + 4)}>
                Load more
              </button>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
