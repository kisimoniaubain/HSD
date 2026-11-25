import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <>
      <section className="relative isolate flex min-h-[400px] items-center overflow-hidden bg-[#102D46] sm:min-h-[460px] lg:min-h-[500px]">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80')",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-[#102D46]/55" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#102D46]/90 via-[#102D46]/65 to-[#102D46]/20" />

        <div className="pointer-events-none absolute right-12 top-12 hidden h-24 w-24 rounded-tr-[45px] border-r-2 border-t-2 border-[#75C8FF]/70 lg:block" />

        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <div className="max-w-3xl translate-y-6 sm:translate-y-7">
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-[#75C8FF]">
                Our Programs
              </span>
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Our Projects. Our Work. Our Shared Future.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              HSD’s projects are designed to strengthen local learning
              ecosystems, expand opportunity, and connect people with practical
              pathways for growth.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3 text-sm">
              <Link
                to="/"
                className="font-medium text-white/65 transition-colors hover:text-[#75C8FF]"
              >
                Home
              </Link>
              <Icon name="chevron_right" className="text-white/40" />
              <span className="font-semibold text-[#75C8FF]">Our Programs</span>
            </div>
          </div>
        </div>
      </section>

<section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
  <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">

    {/* LEFT CONTENT */}
    <div className="order-2">
      <span className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#0F92E4]">
        <span className="h-[2px] w-9 bg-[#0F92E4]" />
        Project Overview
      </span>

      <h2 className="max-w-xl text-3xl font-extrabold leading-[1.15] tracking-tight text-[#102D46] sm:text-4xl lg:text-5xl">
        Turning ideas into
        <span className="text-[#0F92E4]"> meaningful impact.</span>
      </h2>

      <p className="mt-6 text-base leading-8 text-slate-600">
        At Human Shine Dream, we believe every person and community has the
        potential to create positive change. Our projects are driven by a
        commitment to expanding opportunities, strengthening communities
        and supporting sustainable development.
      </p>

      <p className="mt-4 text-base leading-8 text-slate-600">
        Through education, collaboration and community-centred initiatives,
        we aim to address important needs, encourage participation and
        contribute to a future where everyone has the opportunity to thrive.
      </p>

      {/* FOCUS AREAS */}
      <div className="mt-9 grid grid-cols-1 gap-5 border-t border-slate-200 pt-7 sm:grid-cols-2">

        <div className="flex items-start gap-3">
          <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#E9F5FD] text-[#0F92E4]">
            <span className="text-sm font-bold">01</span>
          </span>
          <div>
            <h3 className="font-bold text-[#102D46]">People Development</h3>
            <p className="mt-1 text-sm leading-6 text-slate-500">
              Supporting learning, growth and opportunities.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#E9F5FD] text-[#0F92E4]">
            <span className="text-sm font-bold">02</span>
          </span>
          <div>
            <h3 className="font-bold text-[#102D46]">Community Growth</h3>
            <p className="mt-1 text-sm leading-6 text-slate-500">
              Encouraging participation and shared progress.
            </p>
          </div>
        </div>

      </div>
    </div>


{/* RIGHT IMAGE - ARRANGED COLLAGE */}
<div className="relative order-1 mx-auto h-[480px] w-full max-w-[520px] sm:h-[560px] sm:max-w-[560px]">

  {/* MAIN IMAGE */}
  <div className="absolute left-1/2 top-1/2 z-20 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-[5px] border-white shadow-[0_20px_50px_rgba(16,45,70,0.20)] transition-transform duration-500 hover:scale-[1.02] sm:h-[420px] sm:w-[420px]">
    <img
      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7qDuGKKbMguyZ141zRNsz90E1pTj5ctJFn0K6dayfuVW787tLZahoDMbO1Spfw6R4Md0R11FhCVjf3vLA_0aRCuiTDfeuFn8E3X86QltSzTVX-vfwF1NQLVQZAW-InbXRZ4ope3xP4UHIz4irtHYjJbNkmEovUrslrXV9HYdGnxrpg05rj1QmBU42kjucyCsI1pBzKvGFZtVWPe8iOC0SWOn-AHkqNHlzj0ZvslQ"
      alt="Young scholars collaborating over learning tablets and notebooks"
      className="h-full w-full object-cover"
    />
  </div>

  {/* TOP RIGHT IMAGE */}
  <div className="absolute right-0 top-2 z-30 h-[145px] w-[145px] overflow-hidden rounded-full border-4 border-white shadow-[0_12px_30px_rgba(16,45,70,0.20)] transition-transform duration-500 hover:scale-105 sm:right-2 sm:top-0 sm:h-[190px] sm:w-[190px]">
    <img
      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOIc5zymMgFI5wM_nWkuPpjJaxkq4-nEfKHxezyEpf5m2WOmXHTOfwscXVmcZ3HsxdQckM4errYhRFvsJwhjDWFrjdlqS8Zco5WTgeYKUtFkU242zBVuOUHlQE5r40Q1utM-vMHkD_UC5pKQB7HjohSJEBUci7nxxK0zk5Q2qmQK3caqP0Y6QShOKrYJCU4X4oincVB64j06iZkxSD9uIf6-ADiaA-mJ3xwlL2PYk"
      alt="Youth leaders celebrating a community achievement together"
      className="h-full w-full object-cover"
    />
  </div>

  {/* BOTTOM LEFT IMAGE */}
  <div className="absolute bottom-5 left-0 z-30 h-[155px] w-[155px] overflow-hidden rounded-full border-4 border-white shadow-[0_12px_30px_rgba(16,45,70,0.20)] transition-transform duration-500 hover:scale-105 sm:bottom-3 sm:left-0 sm:h-[195px] sm:w-[195px]">
    <img
      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWKJIAOOMCCwA6jnlVfp9FnX2UAsQ0sIHDdPvyuHOiv1yLCIXZj4TEZQFV6GDlkLnFI-Wr2wc02oV8EUqAwXbjJHbYlemH6MKHhOd9cd__WDVINU2cjFbfNjgiUzkbHfAg6PnaCRcat1TOCG4fBhdszrZE8tqZUKu4cGVe_aVQ9U8JvXgYNocGYCyRjyZr6Dkkshnx5RxpiE4JRwNgEeMtQdpRRa3Jj8wquZeR7tA"
      alt="A mentor guiding a student through a robotics activity"
      className="h-full w-full object-cover"
    />
  </div>

  {/* IMPACT BADGE */}
  <div className="absolute bottom-5 right-0 z-40 flex items-center gap-2 rounded-full border border-white bg-white/95 px-3 py-3 text-[#102D46] shadow-[0_10px_25px_rgba(16,45,70,0.18)] backdrop-blur-md sm:bottom-10 sm:right-0 sm:px-4">
    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E9F5FD] text-sm font-bold text-[#0F92E4]">
      ★
    </span>

    <span className="flex flex-col">
      <span className="text-sm font-bold leading-none text-[#102D46]">
        100% Dignity
      </span>
      <span className="mt-1 text-[10px] font-medium uppercase tracking-wider text-slate-600">
        & Grassroots Impact
      </span>
    </span>
  </div>

</div>


  </div>
</section>

{/* ONGOING PROJECTS */}
<section className="bg-[#F4FAFE] px-6 py-24 lg:px-12">
  <div className="mx-auto max-w-7xl">

    {/* SECTION HEADER */}
    <div className="mb-20 max-w-3xl">
      <span className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#0F92E4]">
        <span className="h-2 w-2 rounded-full bg-[#0F92E4]"></span>
        Our work in action
      </span>

      <h2 className="text-3xl font-bold leading-tight text-[#102D46] sm:text-4xl lg:text-5xl">
        Ongoing Projects
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-8 text-[#475467]">
        Turning ideas into action. Discover the initiatives working to expand
        opportunities, strengthen communities and create lasting change.
      </p>
    </div>

    {/* FULL PROJECT SECTIONS */}
    <div className="space-y-24 lg:space-y-32">
      {projects.map((project, index) => (
        <article
          key={project.slug}
          className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${
            index % 2 !== 0 ? "lg:[&>div:first-child]:order-2" : ""
          }`}
        >

{/* STYLED PROJECT IMAGE */}
<div className="relative isolate px-3 pb-3">
  {/* DECORATIVE BLUE BACKGROUND SHAPE */}
  <div
    className={`absolute -z-10 h-4/5 w-4/5 rounded-[4rem] bg-[#0F92E4] ${
      index % 2 === 0
        ? "right-0 top-0"
        : "bottom-0 left-0"
    }`}
  ></div>

  {/* IMAGE FRAME */}
  <div
    className={`relative h-[300px] overflow-hidden rounded-[4rem] sm:h-[400px] lg:h-[460px] ${
      index % 2 === 0 ? "mr-5 mt-5" : "ml-5 mt-5"
    }`}
  >
    <img
      src={project.image}
      alt={project.title}
      className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
    />

    {/* IMAGE OVERLAY */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#102D46]/50 via-transparent to-transparent"></div>

    {/* CATEGORY LABEL */}
    <span className="absolute left-5 top-5 rounded-full border border-white/40 bg-white/80 px-5 py-2.5 text-xs font-semibold text-[#102D46] backdrop-blur-md">
      {project.category}
    </span>

    {/* PROJECT NUMBER */}
    <div className="absolute bottom-5 right-5 flex h-16 w-16 items-center justify-center rounded-[2rem] border border-white/40 bg-white/85 text-xl font-bold text-[#0F92E4] backdrop-blur-md">
      {String(index + 1).padStart(2, "0")}
    </div>
  </div>
</div>


          {/* PROJECT DETAILS */}
          <div className="py-4">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="text-sm font-bold tracking-widest text-[#0F92E4]">
                PROJECT {String(index + 1).padStart(2, "0")}
              </span>

              <span className="h-px w-10 bg-[#0F92E4]"></span>

              <span className="rounded-full border border-[#0F92E4]/30 bg-[#E9F5FD] px-4 py-1.5 text-xs font-semibold text-[#0B7BC3]">
                {project.status}
              </span>
            </div>

            <h3 className="max-w-xl text-3xl font-bold leading-tight text-[#102D46] sm:text-4xl">
              {project.title}
            </h3>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#475467]">
              {project.shortDescription}
            </p>

            <div className="mt-8 flex items-center gap-3 border-t border-[#DCEAF5] pt-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E9F5FD] text-[#0F92E4]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#98A2B3]">
                  Project focus
                </p>
                <p className="mt-1 text-sm font-medium text-[#475467]">
                  {project.location}
                </p>
              </div>
            </div>

            <Link
              to={`/projects/${project.slug}`}
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#0F92E4] px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#0B7BC3]"
            >
              Learn more
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </article>
      ))}
    </div>

  </div>
</section>


{/* PROJECT IMPACT SECTION */}
<section className="relative isolate overflow-hidden bg-[#102D46] py-24 sm:py-28">
  <img
    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=85"
    alt=""
    aria-hidden="true"
    className="absolute inset-0 z-0 h-full w-full object-cover opacity-40"
  />
  <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#102D46]/90 via-[#102D46]/75 to-[#102D46]/90" />

  {/* BACKGROUND DECORATION */}
  <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#0F92E4]/10 blur-3xl"></div>
  <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#0F92E4]/10 blur-3xl"></div>

  <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
    {/* SECTION INTRO */}
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-flex items-center rounded-full border border-[#0F92E4]/40 bg-[#0F92E4]/10 px-5 py-2 text-sm font-semibold tracking-wide text-[#55B9FF]">
        The Difference We Aim to Make
      </span>

      <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
        Creating Impact That <span className="text-[#0F92E4]">Matters.</span>
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
        Every project is an opportunity to open doors, strengthen communities
        and create lasting possibilities. Our focus is on meaningful progress
        that puts people at the centre of change.
      </p>
    </div>

    {/* IMPACT AREAS */}
    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {[
        {
          number: "01",
          title: "Expanded Opportunities",
          description:
            "Creating greater access to learning, skills development and opportunities for growth.",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-7 w-7">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
            </svg>
          ),
        },
        {
          number: "02",
          title: "Stronger Communities",
          description:
            "Supporting local collaboration, shared responsibility and community-led development.",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-7 w-7">
              <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="10" cy="7" r="4" />
              <path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          ),
        },
        {
          number: "03",
          title: "Youth Empowerment",
          description:
            "Encouraging young people to build confidence, develop leadership and shape their futures.",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-7 w-7">
              <path d="M12 2v20M2 12h20" />
              <path d="m5 5 14 14M19 5 5 19" />
            </svg>
          ),
        },
        {
          number: "04",
          title: "Sustainable Change",
          description:
            "Building local capacity and partnerships that help positive progress continue over time.",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-7 w-7">
              <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          ),
        },
      ].map((item) => (
        <div
          key={item.number}
          className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#0F92E4]/60 hover:bg-white/[0.10]"
        >
          <div className="flex items-center justify-between">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F92E4]/15 text-[#55B9FF] transition-colors duration-300 group-hover:bg-[#0F92E4] group-hover:text-white">
              {item.icon}
            </div>

            <span className="text-sm font-bold tracking-widest text-white/30">
              {item.number}
            </span>
          </div>

          <h3 className="mt-8 text-xl font-bold text-white">
            {item.title}
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/60">
            {item.description}
          </p>

          <div className="mt-8 h-1 w-12 rounded-full bg-[#0F92E4] transition-all duration-300 group-hover:w-20"></div>
        </div>
      ))}
    </div>

    {/* BOTTOM MESSAGE */}
    <div className="mt-16 border-t border-white/10 pt-10 text-center">
      <p className="mx-auto max-w-3xl text-lg font-medium leading-8 text-white/80 sm:text-xl">
        Real impact goes beyond activities. It is reflected in the opportunities
        people gain, the communities they strengthen and the change they sustain.
      </p>
    </div>
  </div>
</section>


      <section className="bg-white">
        <div className="px-9 py-[104px] text-center text-[#102D46] max-[680px]:px-5 max-[680px]:py-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0F92E4]/[0.12] bg-[#0F92E4]/[0.08] px-3.5 py-[7px] text-[10px] font-extrabold tracking-[0.1em] text-[#0F92E4] uppercase">
              Continue exploring
            </span>
            <h2 className="mt-[18px] text-[clamp(1.55rem,2.4vw,2.25rem)] leading-[1.16] text-[#102D46]">
              Learn more about HSD&apos;s work and how you can contribute.
            </h2>
            <p className="mx-auto mt-[18px] max-w-[700px] text-[#475467]">
              Whether you are a community partner, donor, volunteer, or
              institution, we welcome the opportunity to connect.
            </p>
            <div className="relative z-10 mt-[26px] flex flex-wrap justify-center gap-[14px] max-[680px]:flex-col max-[680px]:items-stretch">
              <Link
                to="/get-involved"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border border-transparent bg-[#0F92E4] px-[22px] text-[0.92rem] font-bold tracking-[-0.01em] text-white shadow-[0_10px_20px_rgba(15,146,228,0.2)] transition duration-200 hover:-translate-y-px hover:bg-[#0B7BC3] max-[680px]:w-full"
              >
                Get involved
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
