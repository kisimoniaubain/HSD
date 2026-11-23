import { Link, useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { projects } from '../data/projects';

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="section-shell">
        <div className="max-width-shell">
          <h2>Project not found.</h2>
          <Link to="/projects" className="btn btn-primary">Back to projects</Link>
        </div>
      </section>
    );
  }

  const related = projects.filter((item) => item.slug !== project.slug).slice(0, 2);

  return (
    <>
      <section className="section-shell project-detail-hero">
        <div className="max-width-shell">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Projects', to: '/projects' }, { label: project.title, to: `/projects/${project.slug}` }]} />
          <div className="project-detail-header">
            <div className="project-detail-copy">
              <span className="eyebrow">{project.category}</span>
              <h1>{project.title}</h1>
              <p>{project.shortDescription}</p>
              <div className="project-detail-meta">
                <span><strong>Location:</strong> {project.location}</span>
                <span><strong>Status:</strong> {project.status}</span>
              </div>
            </div>
            <img src={project.image} alt={project.title} className="project-detail-image" />
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="max-width-shell detail-grid">
          <div className="detail-block">
            <h2>Overview</h2>
            <p>{project.overview}</p>
          </div>
          <div className="detail-block">
            <h2>Background</h2>
            <p>{project.background}</p>
          </div>
        </div>
      </section>

      <section className="section-shell soft-surface">
        <div className="max-width-shell detail-grid three-up">
          <div className="detail-block">
            <h3>Objectives</h3>
            <ul>
              {project.objectives.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="detail-block">
            <h3>Main activities</h3>
            <ul>
              {project.activities.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="detail-block">
            <h3>Expected outcomes</h3>
            <ul>
              {project.outcomes.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="max-width-shell">
          <div className="section-heading-row">
            <div>
              <span className="eyebrow">Gallery</span>
              <h2>Project implementation moments.</h2>
            </div>
          </div>
          <div className="gallery-grid">
            {project.gallery.map((image) => (
              <img key={image} src={image} alt={project.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell soft-surface">
        <div className="max-width-shell">
          <div className="section-heading-row">
            <div>
              <span className="eyebrow">Related projects</span>
              <h2>Continue exploring similar work.</h2>
            </div>
          </div>
          <div className="project-grid small-grid">
            {related.map((item) => (
              <Link key={item.slug} to={`/projects/${item.slug}`} className="related-project-card">
                <img src={item.image} alt={item.title} />
                <div>
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
