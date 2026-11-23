import CallToAction from '../components/CallToAction';
import PageHero from '../components/PageHero';

const workAreas = [
  {
    title: 'Scholar Exchange Programs',
    description: 'HSD supports learning exchanges that connect students, educators, and emerging leaders across communities and regions. These experiences broaden perspective, strengthen networks, and create practical pathways for learning beyond local boundaries.',
    objectives: ['Expand access to learning opportunities', 'Build cross-cultural understanding', 'Strengthen future-facing leadership'],
    activities: ['Peer mentoring and exchange planning', 'Learning circles and collaborative workshops', 'Cross-community engagement and reflection'],
    beneficiaries: 'Students, educators, and community youth networks',
    outcomes: 'Greater confidence, stronger networks, and more active engagement in learning and leadership.'
  },
  {
    title: 'Grassroots Leadership Hubs',
    description: 'These hubs provide community-rooted spaces for leadership development, facilitation, and practical collaboration. They help young people and local leaders build confidence while strengthening civic agency in their own communities.',
    objectives: ['Increase local leadership capacity', 'Support peer mentorship', 'Build community-led action'],
    activities: ['Leadership training and peer circles', 'Community challenge facilitation', 'Mentor engagement and reflection'],
    beneficiaries: 'Youth leaders, local organizers, grassroots advocates',
    outcomes: 'More resilient local leadership and a stronger culture of participation.'
  },
  {
    title: 'Civic Innovation Labs',
    description: 'The labs bring together people with ideas, institutions, and practical expertise to test and shape solutions to shared social challenges. HSD supports experimentation rooted in community realities.',
    objectives: ['Support local problem-solving', 'Encourage adaptive learning', 'Connect ideas to action'],
    activities: ['Co-design sessions and workshops', 'Prototype testing with local input', 'Scaling and learning reflection'],
    beneficiaries: 'Grassroots teams, institutions, volunteers, and communities',
    outcomes: 'More responsive community solutions and stronger collaboration across sectors.'
  },
  {
    title: 'Inclusive Education Grants',
    description: 'HSD supports education-focused initiatives that strengthen access, affordability, and inclusion for learners who are often missed by traditional systems. Grants are designed with community input and local relevance in mind.',
    objectives: ['Improve access to support and learning resources', 'Reduce barriers to participation', 'Support sustainable school-community learning'],
    activities: ['Grant review and resource planning', 'Implementation support and monitoring', 'Community consultation and feedback'],
    beneficiaries: 'Students, families, community schools, and local education actors',
    outcomes: 'Improved access, stronger continuity of support, and more inclusive learning environments.'
  },
  {
    title: 'Digital Literacy Summits',
    description: 'Digital literacy is a key enabling skill for education, work, and civic participation. These summits provide practical learning experiences around digital confidence, safe participation, and meaningful use of online tools.',
    objectives: ['Increase digital confidence', 'Build work and learning readiness', 'Promote responsible digital engagement'],
    activities: ['Hands-on digital workshops', 'Mentor sessions and skills labs', 'Digital safety and community storytelling'],
    beneficiaries: 'Youth, educators, community leaders, young professionals',
    outcomes: 'Higher readiness and stronger digital participation across communities.'
  },
  {
    title: 'Community Learning Networks',
    description: 'These networks connect families, educators, mentors, and local institutions around shared learning goals. The aim is to create sustainable local ecosystems where support can move beyond isolated moments and become long-term practice.',
    objectives: ['Connect support systems', 'Strengthen family and school relationships', 'Promote ongoing learning continuity'],
    activities: ['Network coordination and local planning', 'Learning sessions and peer exchange', 'Resource sharing and collaborative support'],
    beneficiaries: 'Families, schools, mentors, youth groups, local organizations',
    outcomes: 'More connected communities and more reliable systems of support.'
  },
];

export default function WhatWeDo() {
  return (
    <>
      <PageHero
        tag="What we do"
        title="Programs designed to unlock potential."
        intro="HSD works at the intersection of education, leadership, and community development to build systems that help people move from potential into practical opportunity."
        image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
      />

      <section className="section-shell">
        <div className="max-width-shell two-column-layout">
          <div>
            <span className="eyebrow">Our approach</span>
            <h2>We design work that is grounded in real community needs.</h2>
          </div>
          <p>
            Our program approach centers participation, local ownership, and long-term learning. Rather than applying top-down models, HSD works with communities to identify gaps, build structures, and adapt initiatives in ways that remain relevant and sustainable.
          </p>
        </div>
      </section>

      <section className="section-shell soft-surface">
        <div className="max-width-shell">
          <div className="section-heading-row">
            <div>
              <span className="eyebrow">Areas of engagement</span>
              <h2>Key areas of work and collaboration.</h2>
            </div>
          </div>

          <div className="initiative-grid">
            {workAreas.map((area) => (
              <article key={area.title} className="initiative-card">
                <h3>{area.title}</h3>
                <p>{area.description}</p>

                <div className="initiative-block">
                  <h4>Objectives</h4>
                  <ul>
                    {area.objectives.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="initiative-block">
                  <h4>Activities</h4>
                  <ul>
                    {area.activities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="initiative-meta">
                  <strong>Beneficiaries:</strong>
                  <span>{area.beneficiaries}</span>
                </div>
                <div className="initiative-meta">
                  <strong>Expected outcomes:</strong>
                  <span>{area.outcomes}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="max-width-shell process-layout">
          <div>
            <span className="eyebrow">How we work</span>
            <h2>Our process is collaborative, practical, and community-centered.</h2>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <span>01</span>
              <p>Listen to communities, institutions, and local partners.</p>
            </div>
            <div className="process-step">
              <span>02</span>
              <p>Design with clear needs, goals, and contextual realities in mind.</p>
            </div>
            <div className="process-step">
              <span>03</span>
              <p>Implement with practical support, shared accountability, and local coordination.</p>
            </div>
            <div className="process-step">
              <span>04</span>
              <p>Review, adapt, and strengthen strategies based on learning and feedback.</p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        eyebrow="Turn ideas into action"
        title="Let’s build programs that help people grow with purpose."
        description="HSD partners with communities, institutions, and supporters who want to create lasting, human-centered change."
        primaryLabel="Donate"
        primaryTo="/donate"
        secondaryLabel="Contact us"
        secondaryTo="/contact"
      />
    </>
  );
}
