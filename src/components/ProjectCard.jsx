import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <img src={project.image} alt={project.title} className="project-card__image" />
      <div className="project-card__body">
        <div className="meta-row">
          <span className="project-tag">{project.category}</span>
          <span className="project-status">{project.status}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.shortDescription}</p>
        <div className="project-meta">
          <span>{project.location}</span>
        </div>
        <Link to={`/projects/${project.slug}`} className="text-link">
          Learn more <Icon name="arrow_outward" className="material-symbols" />
        </Link>
      </div>
    </article>
  );
}
