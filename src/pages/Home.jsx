import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../components/PrimaryButton';
import Icon from '../components/Icon';

const heroImages = ['/hero1.jpg', '/hero2.jpg', '/hero3.jpg'];

export default function Home() {
  const [activeHeroImage, setActiveHeroImage] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveHeroImage((current) => (current + 1) % heroImages.length);
    }, 7000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <>
      <section className="hero-section">
        <div className="hero-background" aria-hidden="true">
          {heroImages.map((image, index) => (
            <img
              key={image}
              className={`${index === activeHeroImage ? 'active' : ''} ${index > 0 ? 'top-aligned' : ''}`}
              src={image}
              alt=""
              fetchPriority={index === 0 ? 'high' : 'auto'}
            />
          ))}
        </div>
        <div className="max-width-shell hero-content">
          <div className="hero-copy">
            <span className="eyebrow light">Human Shine Dream</span>
            <h1>
              Empowering People. Inspiring Dreams. <em>Building Brighter Futures.</em>
            </h1>
            <p>
              We connect communities, institutions, and local leaders to expand access to learning, opportunity, and meaningful participation for people who are ready to grow.
            </p>
            <div className="hero-actions">
              <PrimaryButton to="/projects">Explore Our Programs</PrimaryButton>
              <Link to="/what-we-do" className="btn btn-secondary hero-secondary-btn">Discover Our Work</Link>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            left: 0,
            height: '80px',
            overflow: 'hidden',
            lineHeight: 0,
            pointerEvents: 'none',
            zIndex: 2,
          }}
        >
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            style={{ display: 'block', width: '100%', height: '100%' }}
          >
            <path
              d="M0,45 C360,-15 720,105 1440,35 L1440,120 L0,120 Z"
              fill="#fff"
            />
          </svg>
        </div>
      </section>

<section className="bg-white pt-6 pb-16 overflow-hidden sm:pt-8 sm:pb-20 lg:pt-10 lg:pb-28">
  <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">

    {/* WHO WE ARE CONTENT */}
    <div className="max-w-2xl">
      <span className="eyebrow mb-8 block">Who We Are</span>

      <h2 className="mt-5 mb-6 text-4xl leading-[1.12] tracking-tight font-bold text-[#102D46] sm:text-5xl lg:text-[3.5rem]">
        We help communities turn potential into progress.
      </h2>

      <p className="mb-5 text-lg font-medium leading-[1.85] text-slate-700">
        Human Shine Dream (HSD) is an international educational
        development initiative committed to empowering people,
        strengthening communities, and creating opportunities for
        sustainable growth.
      </p>

      <p className="mb-5 text-base leading-[1.85] text-slate-500">
        We believe that every individual has the potential to make a
        meaningful difference when given access to knowledge,
        resources, opportunities, and the right support. Through
        collaboration with communities, institutions, educators,
        and local leaders, we seek to create pathways that inspire
        learning, encourage leadership, and promote inclusive
        development.
      </p>

      <p className="mb-5 text-base leading-[1.85] text-slate-500">
        Our approach places people at the center of development.
        We value collaboration, innovation, equal opportunity, and
        the power of collective action in building a brighter future.
      </p>

      {/* CTA BUTTON */}
      <div className="mt-8">
        <Link
          to="/who-we-are"
          className="inline-flex items-center gap-3 rounded-full bg-[#0F92E4] px-7 py-4 font-semibold text-white no-underline shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#174bc5] hover:shadow-xl"
        >
          Discover Who We Are
          <Icon name="arrow_outward" className="material-symbols" />
        </Link>
      </div>

      {/* HIGHLIGHTS */}
      <div className="mt-11 grid grid-cols-2 gap-5 border-t border-slate-200 pt-7 sm:gap-8">

        <div>
          <span className="mb-3 block text-sm font-bold text-[#0F92E4]">
            01
          </span>

          <h3 className="mb-2 text-lg font-bold text-[#102D46]">
            People First
          </h3>

          <p className="text-sm leading-7 text-slate-500">
            Putting people and communities at the heart of development.
          </p>
        </div>

        <div>
          <span className="mb-3 block text-sm font-bold text-[#0F92E4]">
            02
          </span>

          <h3 className="mb-2 text-lg font-bold text-[#102D46]">
            Shared Progress
          </h3>

          <p className="text-sm leading-7 text-slate-500">
            Building opportunities through collaboration and partnership.
          </p>
        </div>

      </div>
    </div>

    {/* IMAGE COLLAGE */}
    <div className="relative mx-auto min-h-[390px] w-full max-w-[650px] px-2.5 pb-6 sm:min-h-[480px] sm:px-4 sm:pb-9 lg:min-h-[540px]">

      {/* MAIN IMAGE */}
      <div className="ml-auto h-[310px] w-[90%] overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(16,45,70,0.12)] sm:h-[380px] lg:h-[430px] lg:w-[85%]">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1100&q=85"
          alt="People coming together in a community"
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      {/* OVERLAPPING IMAGE */}
      <div className="absolute bottom-6 left-0 h-[145px] w-[48%] overflow-hidden rounded-[22px] border-[5px] border-[#0F92E4] shadow-[0_15px_40px_rgba(16,45,70,0.16)] sm:bottom-9 sm:h-[190px] sm:border-[7px] lg:bottom-[15px] lg:h-[225px] lg:border-[8px]">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=85"
          alt="Students learning and collaborating"
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      {/* FLOATING CAPTION */}
      <div className="absolute right-0 bottom-9 flex items-center gap-2 rounded-2xl bg-white p-3 shadow-[0_12px_35px_rgba(16,45,70,0.12)] sm:bottom-12 sm:gap-3 sm:p-4 lg:bottom-[55px] lg:gap-3 lg:p-5">

        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#EAF3FF] text-xl text-[#0F92E4] sm:h-11 sm:w-11">
          <Icon name="groups" className="material-symbols" />
        </span>

        <div>
          <strong className="block text-xs font-bold text-[#102D46] sm:text-sm">
            Stronger Together
          </strong>

          <span className="block text-[10px] text-slate-500 sm:text-xs">
            Empowering people and communities
          </span>
        </div>

      </div>
    </div>

  </div>
</section>


{/* WHAT WE DO SECTION */}
<section className="relative overflow-hidden bg-[#F4FAFE] py-20 sm:py-24 lg:py-28">

  <div className="mx-auto max-w-7xl px-5 sm:px-8">

    {/* SECTION INTRO */}
    <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-16">

      <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.2em] text-[#0F92E4]">
        What We Do
      </span>

      <h2 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-[#102D46] sm:text-4xl lg:text-5xl">
        Creating Opportunities.
        <span className="text-[#0F92E4]"> Empowering Communities.</span>
        {' '}Transforming Lives.
      </h2>

      <p className="mx-auto max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
        We work to create meaningful opportunities, strengthen communities,
        and support sustainable development through collaboration,
        education, empowerment, and inclusive growth.
      </p>

    </div>

    {/* PROGRAM CARDS */}
    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">

      {/* CARD 1 */}
      <div className="group overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(16,45,70,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(16,45,70,0.12)]">

        <div className="relative h-56 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=85"
            alt="Students participating in education"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#102D46]/50 to-transparent" />
        </div>

        <div className="p-6">
          <span className="mb-3 block text-sm font-bold tracking-widest text-[#0F92E4]">
            01
          </span>

          <h3 className="mb-3 text-xl font-bold text-[#102D46]">
            Education & Learning
          </h3>

          <p className="mb-5 text-sm leading-7 text-slate-500">
            Supporting access to learning, knowledge, and opportunities
            that help individuals reach their potential.
          </p>

          <Link
            to="/what-we-do"
            className="inline-flex items-center gap-2 font-semibold text-[#0F92E4] transition-all duration-300 hover:gap-4"
          >
            Learn More
            <Icon name="arrow_outward" className="material-symbols" />
          </Link>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="group overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(16,45,70,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(16,45,70,0.12)]">

        <div className="relative h-56 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=800&q=85"
            alt="Young people participating in a group activity"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#102D46]/50 to-transparent" />
        </div>

        <div className="p-6">
          <span className="mb-3 block text-sm font-bold tracking-widest text-[#0F92E4]">
            02
          </span>

          <h3 className="mb-3 text-xl font-bold text-[#102D46]">
            Youth Empowerment
          </h3>

          <p className="mb-5 text-sm leading-7 text-slate-500">
            Encouraging leadership, participation, and opportunities
            for young people to contribute to their communities.
          </p>

          <Link
            to="/what-we-do"
            className="inline-flex items-center gap-2 font-semibold text-[#0F92E4] transition-all duration-300 hover:gap-4"
          >
            Learn More
            <Icon name="arrow_outward" className="material-symbols" />
          </Link>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="group overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(16,45,70,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(16,45,70,0.12)]">

        <div className="relative h-56 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=85"
            alt="Community members working together"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#102D46]/50 to-transparent" />
        </div>

        <div className="p-6">
          <span className="mb-3 block text-sm font-bold tracking-widest text-[#0F92E4]">
            03
          </span>

          <h3 className="mb-3 text-xl font-bold text-[#102D46]">
            Community Development
          </h3>

          <p className="mb-5 text-sm leading-7 text-slate-500">
            Working alongside communities to encourage collaboration,
            local participation, and sustainable progress.
          </p>

          <Link
            to="/what-we-do"
            className="inline-flex items-center gap-2 font-semibold text-[#0F92E4] transition-all duration-300 hover:gap-4"
          >
            Learn More
            <Icon name="arrow_outward" className="material-symbols" />
          </Link>
        </div>
      </div>

      {/* CARD 4 */}
      <div className="group overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(16,45,70,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(16,45,70,0.12)]">

        <div className="relative h-56 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=85"
            alt="People collaborating in a community"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#102D46]/50 to-transparent" />
        </div>

        <div className="p-6">
          <span className="mb-3 block text-sm font-bold tracking-widest text-[#0F92E4]">
            04
          </span>

          <h3 className="mb-3 text-xl font-bold text-[#102D46]">
            Partnerships & Collaboration
          </h3>

          <p className="mb-5 text-sm leading-7 text-slate-500">
            Building meaningful relationships with institutions,
            organizations, and communities to advance shared goals.
          </p>

          <Link
            to="/what-we-do"
            className="inline-flex items-center gap-2 font-semibold text-[#0F92E4] transition-all duration-300 hover:gap-4"
          >
            Learn More
            <Icon name="arrow_outward" className="material-symbols" />
          </Link>
        </div>
      </div>

    </div>

    {/* BOTTOM CTA */}
    <div className="mt-14 text-center">
      <Link
        to="/what-we-do"
        className="inline-flex items-center gap-3 rounded-full bg-[#0F92E4] px-8 py-4 font-semibold text-white shadow-lg shadow-[#0F92E4]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B7BC3] hover:shadow-xl"
      >
        Explore What We Do
        <Icon name="arrow_outward" className="material-symbols" />
      </Link>
    </div>

  </div>
</section>





{/* OUR PURPOSE SECTION */}
<section className="purpose-section relative overflow-hidden bg-[#102D46] py-20 sm:py-24 lg:py-28">

  {/* BACKGROUND IMAGE */}
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2000&q=90"
      alt=""
      className="h-full w-full object-cover opacity-35"
    />
  </div>

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#102D46]/85 via-[#102D46]/80 to-[#0F92E4]/40"></div>

  <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">

    {/* TOP INTRO */}
    <div className="mb-16 grid grid-cols-1 items-end gap-8 lg:grid-cols-2">

      <div>
        <span className="mb-6 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.25em] text-[#75C8FF]">
          <span className="h-[2px] w-10 bg-[#75C8FF]"></span>
          Our Purpose
        </span>

        <h2 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
          Every person.
          <span className="block text-[#75C8FF]">Every community.</span>
          A brighter future.
        </h2>
      </div>

      <div className="lg:pb-3 lg:pl-10">
        <p className="max-w-xl text-base leading-8 text-white sm:text-lg">
          We exist to help people discover their potential, bring
          communities together, and create opportunities that
          lead to meaningful and lasting progress.
        </p>
      </div>

    </div>

    {/* BLUE DIVIDER */}
    <div className="mb-10 h-px w-full bg-white/20"></div>

    {/* PURPOSE BLOCKS */}
    <div className="grid grid-cols-1 gap-0 md:grid-cols-3">

      {/* ITEM 1 */}
      <div className="group border-b border-white/20 py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0">
        <span className="mb-8 block text-sm font-bold tracking-widest text-[#75C8FF]">
          01 / PEOPLE
        </span>

        <h3 className="mb-4 text-2xl font-bold text-white transition-colors group-hover:text-[#0F92E4]">
          Unlock Human Potential
        </h3>

        <p className="max-w-sm text-sm leading-7 text-white">
          Supporting people with the knowledge, skills, and
          opportunities to build better futures.
        </p>

        <div className="mt-8 h-[3px] w-10 bg-[#0F92E4] transition-all duration-500 group-hover:w-20"></div>
      </div>

      {/* ITEM 2 */}
      <div className="group border-b border-white/20 py-8 md:border-b-0 md:border-r md:px-8">
        <span className="mb-8 block text-sm font-bold tracking-widest text-[#75C8FF]">
          02 / COMMUNITY
        </span>

        <h3 className="mb-4 text-2xl font-bold text-white transition-colors group-hover:text-[#0F92E4]">
          Strengthen Communities
        </h3>

        <p className="max-w-sm text-sm leading-7 text-white">
          Encouraging collaboration and local action to create
          positive change from within communities.
        </p>

        <div className="mt-8 h-[3px] w-10 bg-[#0F92E4] transition-all duration-500 group-hover:w-20"></div>
      </div>

      {/* ITEM 3 */}
      <div className="group py-8 md:px-8 md:pr-0">
        <span className="mb-8 block text-sm font-bold tracking-widest text-[#75C8FF]">
          03 / FUTURE
        </span>

        <h3 className="mb-4 text-2xl font-bold text-white transition-colors group-hover:text-[#0F92E4]">
          Inspire Lasting Progress
        </h3>

        <p className="max-w-sm text-sm leading-7 text-white">
          Promoting inclusive opportunities and sustainable
          development for generations to come.
        </p>

        <div className="mt-8 h-[3px] w-10 bg-[#0F92E4] transition-all duration-500 group-hover:w-20"></div>
      </div>

    </div>

  </div>
</section>



      {/* <section className="section-shell mission-section">
        <div className="max-width-shell mission-grid">
          <div className="mission-image-wrap">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80" alt="HSD community engagement" />
          </div>
          <div className="mission-copy">
            <span className="eyebrow">Our purpose</span>
            <h2>Human potential grows when people are equipped, connected, and supported.</h2>
            <p>
              We work with schools, community groups, institutions, and forward-looking partners to build stronger systems for learning, leadership, and meaningful opportunity.
            </p>
            <Link to="/who-we-are" className="text-link">Read more <Icon name="arrow_outward" className="material-symbols" /></Link>
          </div>
        </div>
      </section> */}


{/* FEATURED PROJECTS SECTION */}
<section className="bg-white py-20 sm:py-24 lg:py-28">

  <div className="mx-auto max-w-7xl px-5 sm:px-8">

    {/* SECTION HEADER */}
    <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">

      <div className="max-w-2xl">
        <span className="mb-5 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.22em] text-[#0F92E4]">
          <span className="h-[2px] w-10 bg-[#0F92E4]"></span>
          Our Work
        </span>

        <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-[#102D46] sm:text-5xl">
          Featured
          <span className="text-[#0F92E4]"> Projects</span>
        </h2>

        <p className="mt-5 max-w-xl text-base leading-8 text-[#475467]">
          Discover initiatives and community-driven efforts that
          reflect our commitment to creating opportunities,
          empowering people, and supporting lasting development.
        </p>
      </div>

      <Link
        to="/projects"
        className="btn btn-primary group w-fit"
      >
        Explore all projects
        <Icon name="arrow_forward" className="transition-transform duration-300 group-hover:translate-x-1" />
      </Link>

    </div>

    {/* PROJECT GRID */}
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

      {/* PROJECT 1 */}
      <article className="group overflow-hidden rounded-2xl border border-[#102D46]/10 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

        <div className="relative h-64 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85"
            alt="Students learning together in a classroom"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <span className="absolute left-5 top-5 bg-[#0F92E4] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
            Education
          </span>
        </div>

        <div className="p-7">
          <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-[#0F92E4]">
            Learning & Development
          </span>

          <h3 className="mb-4 text-2xl font-bold leading-snug text-[#102D46] transition-colors group-hover:text-[#0F92E4]">
            Expanding Access to Education
          </h3>

          <p className="mb-7 text-sm leading-7 text-[#475467]">
            Supporting learning opportunities and helping individuals
            develop the knowledge and skills needed for the future.
          </p>

          <Link
            to="/projects"
            className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#0F92E4] transition-colors hover:text-[#0B7BC3]"
          >
            Discover more
            <Icon name="arrow_outward" />
          </Link>
        </div>
      </article>

      {/* PROJECT 2 */}
      <article className="group overflow-hidden rounded-2xl border border-[#102D46]/10 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

        <div className="relative h-64 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=900&q=85"
            alt="Young people participating in a group activity"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <span className="absolute left-5 top-5 bg-[#0F92E4] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
            Youth
          </span>
        </div>

        <div className="p-7">
          <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-[#0F92E4]">
            Youth Empowerment
          </span>

          <h3 className="mb-4 text-2xl font-bold leading-snug text-[#102D46] transition-colors group-hover:text-[#0F92E4]">
            Empowering the Next Generation
          </h3>

          <p className="mb-7 text-sm leading-7 text-[#475467]">
            Encouraging young people to build confidence, discover
            their abilities, and participate in community development.
          </p>

          <Link
            to="/projects"
            className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#0F92E4] transition-colors hover:text-[#0B7BC3]"
          >
            Discover more
            <Icon name="arrow_outward" />
          </Link>
        </div>
      </article>

      {/* PROJECT 3 */}
      <article className="group overflow-hidden rounded-2xl border border-[#102D46]/10 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

        <div className="relative h-64 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=85"
            alt="Community members working together"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <span className="absolute left-5 top-5 bg-[#0F92E4] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
            Community
          </span>
        </div>

        <div className="p-7">
          <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-[#0F92E4]">
            Community Development
          </span>

          <h3 className="mb-4 text-2xl font-bold leading-snug text-[#102D46] transition-colors group-hover:text-[#0F92E4]">
            Building Stronger Communities
          </h3>

          <p className="mb-7 text-sm leading-7 text-[#475467]">
            Promoting collaboration, community participation,
            and locally driven approaches to sustainable progress.
          </p>

          <Link
            to="/projects"
            className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#0F92E4] transition-colors hover:text-[#0B7BC3]"
          >
            Discover more
            <Icon name="arrow_outward" />
          </Link>
        </div>
      </article>

    </div>

  </div>
</section>



{/* PARTNERSHIPS SECTION */}
<section className="relative overflow-hidden bg-[#F4FAFE] py-20 sm:py-24 lg:py-28">

  <div className="mx-auto max-w-7xl px-5 sm:px-8">

    {/* SECTION HEADER */}
    <div className="mx-auto mb-14 max-w-3xl text-center">

      <span className="mb-5 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.22em] text-[#0F92E4]">
        <span className="h-[2px] w-10 bg-[#0F92E4]"></span>
        Working Together
        <span className="h-[2px] w-10 bg-[#0F92E4]"></span>
      </span>

      <h2 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-[#102D46] sm:text-5xl">
        Our
        <span className="text-[#0F92E4]"> Partners</span>
      </h2>

      <p className="mx-auto max-w-2xl text-base leading-8 text-[#475467] sm:text-lg">
        We believe meaningful change happens through collaboration.
        By working alongside organizations, institutions, and
        community partners, we can create greater opportunities
        and build a lasting impact.
      </p>

    </div>

    {/* PARTNER LOGOS */}
    <div className="partner-marquee" aria-label="Our partners">
      <div className="partner-marquee-track">
        {[
        { mark: 'UN', name: 'Organization One', type: 'Development Partner' },
        { mark: 'A', name: 'Organization Two', type: 'Education Partner' },
        { mark: 'W', name: 'Organization Three', type: 'Community Partner' },
        { mark: 'G', name: 'Organization Four', type: 'Strategic Partner' },
        { mark: 'E', name: 'Organization Five', type: 'Learning Partner' },
        { mark: 'C', name: 'Organization Six', type: 'Local Partner' },
        { mark: 'I', name: 'Organization Seven', type: 'Institutional Partner' },
        { mark: 'P', name: 'Organization Eight', type: 'Community Partner' },
      ].map((partner) => (
        <div key={partner.name} className="partner-logo">
          <span className="font-bold text-2xl tracking-tight text-[#0F92E4]" aria-hidden="true">
            {partner.mark}
          </span>
          <div>
            <p className="text-sm font-bold text-[#102D46]">{partner.name}</p>
            <span className="text-xs text-[#475467]">{partner.type}</span>
          </div>
        </div>
      ))}
        {[
          { mark: 'UN', name: 'Organization One', type: 'Development Partner' },
          { mark: 'A', name: 'Organization Two', type: 'Education Partner' },
          { mark: 'W', name: 'Organization Three', type: 'Community Partner' },
          { mark: 'G', name: 'Organization Four', type: 'Strategic Partner' },
          { mark: 'E', name: 'Organization Five', type: 'Learning Partner' },
          { mark: 'C', name: 'Organization Six', type: 'Local Partner' },
          { mark: 'I', name: 'Organization Seven', type: 'Institutional Partner' },
          { mark: 'P', name: 'Organization Eight', type: 'Community Partner' },
        ].map((partner) => (
          <div key={`duplicate-${partner.name}`} className="partner-logo" aria-hidden="true">
            <span className="font-bold text-2xl tracking-tight text-[#0F92E4]">{partner.mark}</span>
            <div>
              <p className="text-sm font-bold text-[#102D46]">{partner.name}</p>
              <span className="text-xs text-[#475467]">{partner.type}</span>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* BOTTOM MESSAGE */}
    <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-[#102D46]/10 pt-8 text-center sm:flex-row sm:text-left">

      <p className="max-w-xl text-sm leading-7 text-[#475467]">
        Interested in working with us to create meaningful change?
        We'd love to explore opportunities for collaboration.
      </p>

      <Link
        to="/partnerships"
        className="btn btn-primary shrink-0"
      >
        Become a Partner
        <Icon name="arrow_forward" />
      </Link>

    </div>

  </div>
</section>

{/* STAY INFORMED SECTION */}
<section className="relative isolate overflow-hidden bg-[#102D46] py-12 sm:py-16 lg:py-18">

  {/* BACKGROUND IMAGE AND CONTRAST OVERLAY */}
  <div className="pointer-events-none absolute inset-0 -z-20">
    <img
      src="/hero2.jpg"
      alt=""
      aria-hidden="true"
      className="h-full w-full object-cover opacity-35"
    />
  </div>
  <div className="pointer-events-none absolute inset-0 -z-10 bg-[#102D46]/75"></div>

  {/* BACKGROUND DECORATION */}
  <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border-[45px] border-[#0F92E4]/10"></div>
  <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full border-[45px] border-[#0F92E4]/10"></div>

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">

      {/* LEFT CONTENT */}
      <div>
        <span className="mb-4 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-[#75C8FF]">
          <span className="h-[2px] w-10 bg-[#75C8FF]"></span>
          Stay Informed
        </span>

        <h2 className="mb-4 max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          Be part of the
          <span className="block text-[#75C8FF]">conversation.</span>
        </h2>

        <p className="stay-informed-copy max-w-xl text-base leading-7 text-white">
          Stay connected with Human Shine Dream. Receive updates
          about our work, community initiatives, upcoming events,
          opportunities, and stories of progress.
        </p>

        {/* HIGHLIGHTS */}
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
          <div className="flex items-center gap-3 text-sm font-medium text-white/85">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0F92E4]/15 text-[#0F92E4]">
              <Icon name="check" />
            </span>
            Project updates
          </div>

          <div className="flex items-center gap-3 text-sm font-medium text-white/85">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0F92E4]/15 text-[#0F92E4]">
              <Icon name="check" />
            </span>
            News & opportunities
          </div>
        </div>
      </div>

      {/* SUBSCRIPTION FORM */}
      <div className="relative mx-auto w-full max-w-md lg:ml-auto">
<div className="absolute -right-2 -top-2 h-12 w-12 rounded-tr-[25px] border-r-2 border-t-2 border-[#75C8FF]"></div>

        <div className="relative z-10 rounded-3xl border border-[#75C8FF]/45 bg-[#0F92E4]/20 p-5 backdrop-blur-md sm:p-6">

          <div className="mb-4">
            <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-lg text-white">
              <Icon name="mail" />
            </span>

            <h3 className="mb-2 text-lg font-extrabold text-white sm:text-xl">
              Join our newsletter
            </h3>

            <p
              className="text-sm leading-7 text-white/90"
              style={{ color: '#ffffffb6', fontSize: '13px' }}
            >
              Get meaningful updates delivered straight to your inbox.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              // Connect this form to your newsletter API or email service.
            }}
            className="space-y-3"
          >
            <div>
              <label
                htmlFor="newsletter-name"
                className="mb-1.5 block text-sm font-semibold text-white"
              >
                Your name
              </label>

              <input
                id="newsletter-name"
                type="text"
                placeholder="Enter your name"
                required
                className="w-full rounded-xl border border-white/35 bg-[#102D46]/35 px-4 py-2.5 text-sm text-white outline-none transition-all placeholder:text-white/70 focus:border-[#75C8FF] focus:ring-2 focus:ring-[#75C8FF]/30"
              />
            </div>

            <div>
              <label
                htmlFor="newsletter-email"
                className="mb-1.5 block text-sm font-semibold text-white"
              >
                Email address
              </label>

              <input
                id="newsletter-email"
                type="email"
                placeholder="you@example.com"
                required
                className="w-full rounded-xl border border-white/35 bg-[#102D46]/35 px-4 py-2.5 text-sm text-white outline-none transition-all placeholder:text-white/70 focus:border-[#75C8FF] focus:ring-2 focus:ring-[#75C8FF]/30"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary group w-full"
            >
              Subscribe to updates
              <Icon name="arrow_forward" className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </form>

        <p
          className="mt-3 text-center text-xs leading-5 text-white"
          style={{ color: '#ffffffb6', 
                   fontSize: '13px',
          }}
        >
          By subscribing, you agree to receive updates from Human Shine Dream.
          You can unsubscribe at any time.
        </p>

        </div>
      </div>

    </div>
  </div>
</section>



    </>
  );
}
