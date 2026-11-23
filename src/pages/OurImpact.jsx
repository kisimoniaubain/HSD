import CallToAction from '../components/CallToAction';
import ImpactStat from '../components/ImpactStat';
import PageHero from '../components/PageHero';
import Icon from '../components/Icon';
import { impactStats } from '../data/navigation';

const impactAreas = [
  {
    title: 'Learning access',
    text: 'We strengthen pathways for students, educators, and communities to access meaningful learning and development support.'
  },
  {
    title: 'Community resilience',
    text: 'Our work reinforces local trust, participation, and practical structures that help communities respond and adapt.'
  },
  {
    title: 'Leadership and agency',
    text: 'We support youth and community leadership by expanding confidence, skills, and opportunities for action.'
  },
  {
    title: 'Institutional collaboration',
    text: 'Partnerships help formal and informal institutions become more connected, responsive, and effective.'
  },
];

const successStories = [
  {
    title: 'A community learning circle became a trusted local support network.',
    text: 'By building a regular, community-led learning rhythm, families and young people gained more consistent access to learning support and mentorship opportunities.',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Youth mentors created a stronger pipeline of local leadership.',
    text: 'A structured mentorship model helped emerging leaders strengthen confidence, practice, and relationship-building skills within their communities.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Digital learning support improved access to practical opportunity.',
    text: 'Workshops and digital literacy sessions created more equitable paths to confidence, learning, and online engagement.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'
  },
];

const testimonials = [
  { name: 'Noah K.', role: 'Community volunteer', text: 'The work is practical, grounded, and genuinely shaped by local realities.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80' },
  { name: 'Lina M.', role: 'School network partner', text: 'What stood out was the emphasis on long-term capacity building instead of short-term fixes.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80' },
  { name: 'Evan T.', role: 'Youth leader', text: 'We felt visible, respected, and supported in turning our ideas into real action.', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80' },
];

const reports = [
  'Annual report draft',
  'Project overview summaries',
  'Impact highlights and case studies',
  'Educational partnership brief',
];

export default function OurImpact() {
  return (
    <>
      <PageHero
        tag="Our impact"
        title="Making a Difference That Matters."
        intro="We measure impact not only by outputs, but by whether communities feel more connected, supported, and able to shape their own futures."
        image="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80"
      />

      <section className="section-shell">
        <div className="max-width-shell two-column-layout">
          <div>
            <span className="eyebrow">Impact overview</span>
            <h2>Impact means creating conditions for people to thrive.</h2>
          </div>
          <p>
            HSD’s impact is shaped by the trust it builds, the opportunities it expands, and the systems it helps strengthen. We recognize that sustainable development requires ongoing listening, reflection, and responsible implementation.
          </p>
        </div>
      </section>

      <section className="section-shell soft-surface">
        <div className="max-width-shell">
          <div className="section-heading-row">
            <div>
              <span className="eyebrow">Impact metrics</span>
              <h2>Representative indicators used to guide and reflect on our work.</h2>
            </div>
          </div>

          <div className="impact-grid">
            {impactStats.map((stat) => (
              <ImpactStat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="max-width-shell">
          <div className="section-heading-row">
            <div>
              <span className="eyebrow">Areas of impact</span>
              <h2>Where our work is creating value.</h2>
            </div>
          </div>

          <div className="columns-grid four-up">
            {impactAreas.map((area) => (
              <article key={area.title} className="info-card">
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell soft-surface">
        <div className="max-width-shell">
          <div className="section-heading-row">
            <div>
              <span className="eyebrow">Success stories</span>
              <h2>Examples of how local action can lead to broader momentum.</h2>
            </div>
          </div>

          <div className="story-grid-vertical">
            {successStories.map((story) => (
              <article key={story.title} className="story-highlight">
                <img src={story.image} alt={story.title} />
                <div>
                  <h3>{story.title}</h3>
                  <p>{story.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="max-width-shell">
          <div className="section-heading-row">
            <div>
              <span className="eyebrow">Testimonials</span>
              <h2>Voices from people working alongside HSD.</h2>
            </div>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((person) => (
              <article key={person.name} className="testimonial-card">
                <img src={person.image} alt={person.name} />
                <h3>{person.name}</h3>
                <p className="role-label">{person.role}</p>
                <p>{person.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell soft-surface">
        <div className="max-width-shell">
          <div className="section-heading-row">
            <div>
              <span className="eyebrow">Reports & publications</span>
              <h2>Documents and resources for partners and interested stakeholders.</h2>
            </div>
          </div>

          <div className="resource-list">
            {reports.map((item) => (
              <div key={item} className="resource-item">
                <Icon name="description" className="material-symbols" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="max-width-shell transparency-box">
          <div>
            <span className="eyebrow">Transparency</span>
            <h2>We are committed to clear, accountable, and responsible reporting.</h2>
          </div>
          <p>
            HSD continues to strengthen its systems for documenting learning, managing partnerships, and communicating progress in ways that are useful to communities, supporters, and institutional stakeholders.
          </p>
        </div>
      </section>

      <CallToAction
        eyebrow="Accountability"
        title="Learn how your support can help strengthen community opportunity."
        description="HSD welcomes partners and donors who want to support sustainable, locally shaped development work."
        primaryTo="/donate"
        secondaryTo="/partnerships"
        secondaryLabel="Partner with us"
      />
    </>
  );
}
