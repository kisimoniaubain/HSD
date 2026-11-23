import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import ProjectCard from '../components/ProjectCard';
import { projectCategories, projects } from '../data/projects';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <PageHero
        tag="Projects"
        title="Our Projects. Our Work. Our Shared Future."
        intro="HSD’s projects are designed to strengthen local learning ecosystems, expand opportunity, and connect people with practical pathways for growth."
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
      />

      <section className="section-shell">
        <div className="max-width-shell">
          <div className="section-heading-row">
            <div>
              <span className="eyebrow">Projects overview</span>
              <h2>Community-centered work with measurable relevance.</h2>
            </div>
          </div>
          <p className="lead-copy">
            Each project is shaped around a commitment to local ownership, accessible learning, and sustainable impact. The work reflects a practical understanding that lasting change grows when communities, institutions, and partners act together.
          </p>
        </div>
      </section>

      <section className="section-shell soft-surface">
        <div className="max-width-shell">
          <div className="filter-bar" aria-label="Project category filter">
            {projectCategories.map((category) => (
              <button
                type="button"
                key={category}
                className={activeCategory === category ? 'filter-pill active' : 'filter-pill'}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="project-grid">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="max-width-shell cta-inline">
          <div>
            <span className="eyebrow">Collaboration</span>
            <h2>Would you like to support a new initiative or partner on implementation?</h2>
          </div>
          <Link to="/contact" className="btn btn-primary">Contact us</Link>
        </div>
      </section>
    </>
  );
}
