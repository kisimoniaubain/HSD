import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import { projects } from '../data/projects';

export default function CommunityLearningHubs() {
  const project = projects.find((item) => item.slug === 'community-learning-hubs');

  if (!project) {
    throw new Error('Missing project data: community-learning-hubs');
  }

  const related = projects.filter((item) => item.slug !== project.slug).slice(0, 2);

  return (
    <>
      <section className="relative isolate flex min-h-[400px] items-center overflow-hidden bg-[#102D46] sm:min-h-[460px] lg:min-h-[500px]">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{ backgroundImage: `url('${project.image}')` }}
        />
        <div className="absolute inset-0 -z-10 bg-[#102D46]/55" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#102D46]/90 via-[#102D46]/65 to-[#102D46]/20" />
        <div className="pointer-events-none absolute right-12 top-12 hidden h-24 w-24 rounded-tr-[45px] border-r-2 border-t-2 border-[#75C8FF]/70 lg:block" />

        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <div className="max-w-3xl translate-y-6 sm:translate-y-7">
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-[#75C8FF]">
                {project.category}
              </span>
            </div>
            <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-7xl">
              {project.title}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              {project.shortDescription}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/75">
              <span><strong className="font-semibold text-white">Location:</strong> {project.location}</span>
              <span><strong className="font-semibold text-white">Status:</strong> {project.status}</span>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-3 text-sm">
              <Link to="/" className="font-medium text-white/65 transition-colors hover:text-[#75C8FF]">Home</Link>
              <Icon name="chevron_right" className="text-white/40" />
              <Link to="/projects" className="font-medium text-white/65 transition-colors hover:text-[#75C8FF]">Our Programs</Link>
              <Icon name="chevron_right" className="text-white/40" />
              <span className="font-semibold text-[#75C8FF]">{project.title}</span>
            </div>
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
            <ul>{project.objectives.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div className="detail-block">
            <h3>Main activities</h3>
            <ul>{project.activities.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div className="detail-block">
            <h3>Expected outcomes</h3>
            <ul>{project.outcomes.map((item) => <li key={item}>{item}</li>)}</ul>
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
            {project.gallery.map((image) => <img key={image} src={image} alt={project.title} />)}
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
