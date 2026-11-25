import CallToAction from '../components/CallToAction';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';

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
      <section className="relative isolate flex min-h-[400px] items-center overflow-hidden bg-[#102D46] sm:min-h-[460px] lg:min-h-[500px]">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80')",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-[#102D46]/55" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#102D46]/90 via-[#102D46]/65 to-[#102D46]/20" />
        <div className="pointer-events-none absolute right-12 top-12 hidden h-24 w-24 rounded-tr-[45px] border-r-2 border-t-2 border-[#75C8FF]/70 lg:block" />

        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <div className="max-w-3xl translate-y-6 sm:translate-y-7">
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-[#75C8FF]">
                What We Do
              </span>
            </div>
            <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Programs designed to
              <span className="block text-[#75C8FF]">unlock potential.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              HSD works at the intersection of education, leadership, and
              community development to build systems that help people move
              from potential into practical opportunity.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3 text-sm">
              <Link
                to="/"
                className="font-medium text-white/65 transition-colors hover:text-[#75C8FF]"
              >
                Home
              </Link>
              <Icon name="chevron_right" className="text-white/40" />
              <span className="font-semibold text-[#75C8FF]">What We Do</span>
            </div>
          </div>
        </div>
      </section>

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
