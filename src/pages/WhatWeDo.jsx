import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import { useEffect, useRef } from 'react';

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
  const beneficiaryCarouselRef = useRef(null);

  const scrollBeneficiaries = (direction) => {
    const carousel = beneficiaryCarouselRef.current;
    if (!carousel) return;

    const card = carousel.querySelector('article');
    const distance = card ? card.getBoundingClientRect().width + 20 : 360;
    carousel.scrollBy({ left: direction * distance, behavior: 'smooth' });
  };

  useEffect(() => {
    const cards = document.querySelectorAll('.beneficiary-reveal');
    if (!cards.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

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


{/* OUR AREAS OF FOCUS */}
<section className="bg-[#F4FAFE] py-20 sm:py-24 lg:py-28">
  <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

    {/* SECTION HEADING */}
    <div className="mx-auto max-w-3xl text-center">
      <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#0F92E4]">
        What Guides Our Work
      </span>

      <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#102D46] sm:text-4xl lg:text-5xl">
        Our Areas of <span className="text-[#0F92E4]">Focus</span>
      </h2>

      <p className="mt-5 text-base leading-8 text-[#475467] sm:text-lg">
        We focus on key areas that create opportunities, strengthen communities
        and support people to reach their full potential.
      </p>
    </div>

    {/* FOCUS AREAS */}
    <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          number: "01",
          title: "Education & Learning",
          description:
            "Expanding access to inclusive learning opportunities, knowledge and resources that help individuals build brighter futures.",
          image:
            "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85",
        },
        {
          number: "02",
          title: "Youth Empowerment",
          description:
            "Supporting young people through skills development, leadership opportunities and initiatives that strengthen their confidence and potential.",
          image:
            "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=85",
        },
        {
          number: "03",
          title: "Community Development",
          description:
            "Encouraging community participation, local innovation and sustainable solutions that respond to shared challenges.",
          image:
            "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1000&q=85",
        },
        {
          number: "04",
          title: "Partnerships & Collaboration",
          description:
            "Building meaningful relationships and working together to connect resources, share knowledge and create greater opportunities.",
          image:
            "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=85",
        },
      ].map((area) => (
        <article
          key={area.number}
          className="group overflow-hidden rounded-[2rem] border border-[#E2EDF5] bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#0F92E4]/40"
        >
          {/* IMAGE */}
          <div className="relative h-[260px] overflow-hidden rounded-[2rem] p-2">
            <img
              src={area.image}
              alt={area.title}
              className="h-full w-full rounded-[1.6rem] object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-2 rounded-[1.6rem] bg-gradient-to-t from-[#102D46]/50 via-transparent to-transparent"></div>

            <span className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-white/85 text-sm font-bold text-[#0F92E4] backdrop-blur-md">
              {area.number}
            </span>
          </div>

          {/* CONTENT */}
          <div className="px-7 pb-8 pt-5">
            <h3 className="text-xl font-bold leading-snug text-[#102D46] transition-colors duration-300 group-hover:text-[#0F92E4]">
              {area.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#475467]">
              {area.description}
            </p>

            <div className="mt-6 h-1 w-12 rounded-full bg-[#0F92E4] transition-all duration-300 group-hover:w-20"></div>
          </div>
        </article>
      ))}

    </div>
  </div>
</section>

{/* OUR APPROACH */}
<section className="relative isolate overflow-hidden py-12 sm:py-16 lg:py-20">
  <div
    className="absolute inset-0 -z-20 bg-cover bg-center"
    style={{ backgroundImage: "url('/Aboutimo/hero.jpg')" }}
  />
  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#102D46]/95 via-[#102D46]/85 to-[#102D46]/35" />
  <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

    {/* SECTION INTRO */}
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
      <div>
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#75C8FF]">
          How We Create Change
        </span>

        <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
          Our Approach to
          <span className="block text-[#75C8FF]">Lasting Impact.</span>
        </h2>
      </div>

      <div className="max-w-2xl lg:pb-1">
        <p className="text-base leading-8 text-white/80 sm:text-lg">
          We believe meaningful change begins by listening to people,
          understanding community needs and creating opportunities for
          everyone to participate. Our approach brings individuals,
          communities and partners together to build solutions that
          encourage growth and lasting progress.
        </p>
      </div>
    </div>

    {/* APPROACH PRINCIPLES */}
    <div className="mt-12 border-t border-white/20">

      {[
        {
          number: "01",
          title: "People-Centred",
          description:
            "We put people at the heart of our work. By listening to individuals and understanding their experiences, we aim to create opportunities that respond to real needs and aspirations.",
          keyword: "People first",
        },
        {
          number: "02",
          title: "Community-Driven",
          description:
            "We value local knowledge, participation and ownership. We encourage communities to identify their priorities, contribute ideas and take an active role in shaping solutions.",
          keyword: "Local ownership",
        },
        {
          number: "03",
          title: "Collaborative & Inclusive",
          description:
            "We believe progress is stronger when people work together. We seek to connect individuals, educators, institutions and partners while encouraging inclusive participation.",
          keyword: "Working together",
        },
        {
          number: "04",
          title: "Sustainable & Impact-Focused",
          description:
            "We aim to support practical solutions that build local capacity, create meaningful opportunities and contribute to positive change beyond individual activities.",
          keyword: "Lasting progress",
        },
      ].map((approach) => (
        <article
          key={approach.number}
          className="group grid gap-5 border-b border-white/20 py-6 transition-all duration-300 sm:py-7 lg:grid-cols-[100px_1fr_1.1fr_180px] lg:items-center lg:gap-10"
        >

          {/* NUMBER */}
          <span className="text-3xl font-light tracking-tight text-[#75C8FF]/70 transition-colors duration-300 group-hover:text-[#75C8FF]">
            {approach.number}
          </span>

          {/* TITLE */}
          <h3 className="text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#75C8FF] sm:text-3xl">
            {approach.title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-sm leading-7 text-white/75 sm:text-base">
            {approach.description}
          </p>

          {/* KEYWORD */}
          <div className="flex items-center gap-2 text-sm font-semibold text-[#75C8FF] lg:justify-end">
            <span className="h-2 w-2 rounded-full bg-[#75C8FF]"></span>
            {approach.keyword}
          </div>

        </article>
      ))}
    </div>

    {/* CLOSING STATEMENT */}
    <div className="mt-10 flex flex-col gap-6 rounded-[2rem] border border-white/15 bg-[#102D46]/95 p-7 backdrop-blur-sm sm:p-9 lg:flex-row lg:items-center lg:justify-between">
      <div className="max-w-2xl">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#75C8FF]">
          Our Commitment
        </span>

        <h3 className="mt-4 text-2xl font-bold leading-snug text-white sm:text-3xl">
          Change happens when people are part of the solution.
        </h3>

        <p className="mt-4 text-sm leading-7 text-white/65">
          We are committed to creating spaces where people can participate,
          contribute their knowledge and help shape a brighter future.
        </p>
      </div>

      <Link
        to="/projects"
        className="inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-full bg-[#0F92E4] px-7 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#0B7BC3] lg:self-center"
      >
        Explore Our Projects

        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-4 w-4"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </Link>
    </div>

  </div>
</section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#0F92E4]">
              How We Work
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#102D46] sm:text-4xl lg:text-5xl">
              Our process is collaborative, practical, and
              <span className="block text-[#0F92E4]">community-centered.</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Listen",
                description: "Listen to communities, institutions, and local partners.",
              },
              {
                title: "Design",
                description: "Design with clear needs, goals, and contextual realities in mind.",
              },
              {
                title: "Implement",
                description: "Implement with practical support, shared accountability, and local coordination.",
              },
              {
                title: "Review",
                description: "Review, adapt, and strengthen strategies based on learning and feedback.",
              },
            ].map((step) => (
              <article
                key={step.title}
                className="group relative overflow-hidden rounded-[2rem] border border-[#E2EDF5] bg-[#F4FAFE] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#0F92E4]/40 hover:bg-white sm:p-8"
              >
                <h3 className="text-xl font-bold text-[#102D46] transition-colors duration-300 group-hover:text-[#0F92E4]">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#475467]">
                  {step.description}
                </p>
                <div className="mt-6 h-1 w-12 rounded-full bg-[#0F92E4] transition-all duration-300 group-hover:w-20" />
              </article>
            ))}
          </div>
        </div>
      </section>


{/* WHO BENEFITS FROM OUR WORK */}
<section className="relative overflow-hidden bg-[#F4FAFE] py-24 sm:py-28 lg:py-32">
  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

    {/* DECORATIVE BACKGROUND */}
    <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full border-[50px] border-[#0F92E4]/[0.035]" />
    <div className="pointer-events-none absolute -left-40 bottom-40 h-72 w-72 rounded-full border-[40px] border-[#0F92E4]/[0.035]" />

    {/* INTRODUCTION */}
    <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
  <span className="inline-block text-xs font-bold uppercase tracking-[0.22em] text-[#0F92E4]">
    Who We Serve
  </span>

  <h2 className="mt-6 w-full max-w-3xl text-center text-balance text-4xl font-bold leading-[1.15] tracking-tight text-[#102D46] sm:text-5xl lg:text-6xl">
    People Are at the Heart{" "}
    <span className="text-[#0F92E4]">of Everything We Do.</span>
  </h2>

      <p className="mx-auto mt-7 max-w-4xl text-base leading-8 text-[#475467] sm:text-lg">
        We believe meaningful change begins with people. Our work focuses on supporting individuals,
        <br className="hidden sm:block" />
        strengthening communities, and connecting people to opportunities that help them thrive.
  </p>

      <div className="mx-auto mt-9 inline-flex max-w-lg items-start gap-4 rounded-2xl border border-[#DDEAF2] bg-white/80 px-6 py-5 text-left shadow-sm sm:items-center">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E9F5FD] text-lg text-[#0F92E4]">
          ✦
        </div>
        <p className="text-sm font-semibold leading-6 text-[#102D46]">
          Creating opportunities where everyone has the chance to learn,
          lead, participate, and shine.
        </p>
      </div>
    </div>

    {/* BENEFICIARY GROUPS */}
    <div className="relative mt-24">

      {/* SECTION HEADING */}
      <div className="mb-12 flex flex-col justify-between gap-5 border-b border-[#102D46]/10 pb-8 lg:flex-row lg:items-end">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0F92E4]">
            The People We Support
          </span>
          <h3 className="mt-3 text-3xl font-bold tracking-tight text-[#102D46] sm:text-4xl">
            Who Benefits From Our Work?
          </h3>
        </div>

        <p className="max-w-md text-sm leading-7 text-[#475467]">
          Across our programs and initiatives, we work alongside diverse
          groups who contribute to stronger, more inclusive communities.
        </p>
      </div>

      {/* CAROUSEL */}
      <div className="relative">

        {/* PREVIOUS BUTTON */}
        <button
          type="button"
          aria-label="Previous beneficiary groups"
          onClick={() => scrollBeneficiaries(-1)}
          className="absolute -left-3 top-[38%] z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#DDEAF2] bg-white text-xl text-[#102D46] shadow-lg transition-all duration-300 hover:border-[#0F92E4] hover:bg-[#0F92E4] hover:text-white sm:-left-5 sm:h-12 sm:w-12 lg:-left-6"
        >
          ←
        </button>

        {/* CAROUSEL TRACK */}
        <div
          ref={beneficiaryCarouselRef}
          className="beneficiary-carousel flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-6"
        >
          {[
            {
              title: "Students & Learners",
              description: "Supporting learners through access to education, learning resources, mentorship, and opportunities to grow.",
              image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85",
              label: "Education"
            },
            {
              title: "Young People & Emerging Leaders",
              description: "Equipping young people with leadership, digital, civic, and problem-solving skills to shape their futures.",
              image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=85",
              label: "Youth Empowerment"
            },
            {
              title: "Educators & Schools",
              description: "Connecting educators and learning institutions with resources, partnerships, and professional development.",
              image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=85",
              label: "Learning"
            },
            {
              title: "Families & Communities",
              description: "Strengthening local support networks and creating opportunities for families and communities to grow together.",
              image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=85",
              label: "Community Growth"
            },
            {
              title: "Grassroots Organisations & Local Leaders",
              description: "Empowering local leaders and community organisations to develop solutions and drive positive change.",
              image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=85",
              label: "Local Leadership"
            },
            {
              title: "Institutions & Partners",
              description: "Building meaningful collaboration with organisations committed to expanding opportunities and community growth.",
              image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=85",
              label: "Collaboration"
            },
          ].map((group, index) => (
            <article
              key={group.title}
              className={`group w-[88%] shrink-0 snap-start overflow-hidden rounded-[1.75rem] border border-[#DDEAF2] bg-white shadow-[0_8px_30px_rgba(16,45,70,0.045)] transition-all duration-500 hover:-translate-y-2 hover:border-[#0F92E4]/40 hover:shadow-[0_20px_45px_rgba(16,45,70,0.12)] sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]`}
              style={{ transitionDelay: `${(index % 3) * 70}ms` }}
            >
              {/* IMAGE */}
              <div className="relative h-[260px] overflow-hidden sm:h-[240px] lg:h-[255px]">
                <img
                  src={group.image}
                  alt={group.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#102D46]/80 via-[#102D46]/10 to-transparent" />

                {/* CATEGORY */}
                <span className="absolute right-5 top-5 rounded-full border border-white/40 bg-[#102D46]/30 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                  {group.label}
                </span>

                {/* IMAGE TITLE */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="mb-3 h-1 w-9 rounded-full bg-[#75C8FF] transition-all duration-500 group-hover:w-16" />
                  <h4 className="max-w-[280px] text-xl font-bold leading-snug text-white">
                    {group.title}
                  </h4>
                </div>
              </div>

              {/* CARD CONTENT */}
              <div className="flex min-h-[160px] flex-col justify-between p-6">
                <p className="text-sm leading-7 text-[#475467]">
                  {group.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-[#E9F0F5] pt-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#98A8B5]">
                    HSD Beneficiaries
                  </span>
                  <span className="text-lg text-[#0F92E4] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* NEXT BUTTON */}
        <button
          type="button"
          aria-label="Next beneficiary groups"
          onClick={() => scrollBeneficiaries(1)}
          className="absolute -right-3 top-[38%] z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#DDEAF2] bg-white text-xl text-[#102D46] shadow-lg transition-all duration-300 hover:border-[#0F92E4] hover:bg-[#0F92E4] hover:text-white sm:-right-5 sm:h-12 sm:w-12 lg:-right-6"
        >
          →
        </button>
      </div>

      {/* CAROUSEL HINT */}
      <div className="mt-5 flex items-center justify-between">
        <p className="text-xs font-medium text-[#98A8B5]">
          Explore the people and communities we support
        </p>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-8 rounded-full bg-[#0F92E4]" />
          <span className="h-1.5 w-3 rounded-full bg-[#B8DFF7]" />
          <span className="h-1.5 w-3 rounded-full bg-[#B8DFF7]" />
        </div>
      </div>
    </div>

  </div>
</section>

      <section className="bg-white">
        <div className="px-9 py-[104px] text-center text-[#102D46] max-[680px]:px-5 max-[680px]:py-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0F92E4]/[0.12] bg-[#0F92E4]/[0.08] px-3.5 py-[7px] text-[10px] font-extrabold tracking-[0.1em] text-[#0F92E4] uppercase">
              Turn ideas into action
            </span>
            <h2 className="mt-[18px] text-[clamp(1.55rem,2.4vw,2.25rem)] leading-[1.16] text-[#102D46]">
              Let’s build programs that help people grow with purpose.
            </h2>
            <p className="mx-auto mt-[18px] max-w-[700px] text-[#475467]">
              HSD partners with communities, institutions, and supporters who
              want to create lasting, human-centered change.
            </p>
            <div className="relative z-10 mt-[26px] flex flex-wrap justify-center gap-[14px] max-[680px]:flex-col max-[680px]:items-stretch">
              <Link
                to="/donate"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border border-transparent bg-[#0F92E4] px-[22px] text-[0.92rem] font-bold tracking-[-0.01em] text-white shadow-[0_10px_20px_rgba(15,146,228,0.2)] transition duration-200 hover:-translate-y-px hover:bg-[#0B7BC3] max-[680px]:w-full"
              >
                Donate
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border border-[#0F92E4]/25 bg-white px-[22px] text-[0.92rem] font-bold tracking-[-0.01em] text-[#0F92E4] transition duration-200 hover:-translate-y-px hover:bg-[#0F92E4]/[0.05] max-[680px]:w-full"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
