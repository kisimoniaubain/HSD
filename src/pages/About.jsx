import { Link } from 'react-router-dom';
import Icon from '../components/Icon';

const teamMembers = [
  { name: 'Amina Okafor', title: 'Executive Director', text: 'Former educator and community advocate focused on equitable and collaborative development.', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=85' },
  { name: 'Darius Moore', title: 'Director of Programs', text: 'Works across education, youth leadership, and community-centered implementation models.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85' },
  { name: 'Elena Rostova', title: 'Head of Partnerships', text: 'Supports institutional engagement and collaborative strategy across regions.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=85' },
  { name: 'Tariq Al-Mansoor', title: 'Technology & Systems Lead', text: 'Builds digital tools and systems that help programs reach communities more effectively.', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=85' },
];

export default function About() {
  return (
    <>
      <section className="relative isolate flex min-h-[400px] items-center overflow-hidden bg-[#102D46] sm:min-h-[460px] lg:min-h-[500px]">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Aboutimo/hero.jpg')",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-[#102D46]/55" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#102D46]/90 via-[#102D46]/65 to-[#102D46]/20" />

        <div className="pointer-events-none absolute right-12 top-12 hidden h-24 w-24 rounded-tr-[45px] border-r-2 border-t-2 border-[#75C8FF]/70 lg:block" />

        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <div className="max-w-3xl translate-y-6 sm:translate-y-7">
            <div className="mb-6 inline-flex items-center gap-3">
              {/* <span className="h-[2px] w-10 bg-[#0F92E4]" /> */}
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-[#75C8FF]">
                About Human Shine Dream
              </span>
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Building Brighter Futures,
              <span className="block text-[#75C8FF]">Together.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Discover who we are, what drives us, and our commitment to
              empowering people, strengthening communities, and creating
              opportunities for lasting positive change.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3 text-sm">
              <Link
                to="/"
                className="font-medium text-white/65 transition-colors hover:text-[#75C8FF]"
              >
                Home
              </Link>
              <Icon name="chevron_right" className="text-white/40" />
              <span className="font-semibold text-[#75C8FF]">Who We Are</span>
            </div>
          </div>
        </div>
      </section>

{/* WHO WE ARE SECTION */}
<section className="relative overflow-hidden bg-[#F7FAFC] py-16 sm:py-20 lg:py-24">

  <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">

    {/* LEFT: CONTENT */}
    <div className="max-w-2xl">

      <div className="mb-5 flex items-center gap-3">
        <span className="h-[2px] w-10 bg-[#0F92E4]" />
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#0F92E4]">
          Who We Are
        </span>
      </div>

      <h2 className="text-3xl font-extrabold leading-[1.12] tracking-tight text-[#102D46] sm:text-4xl lg:text-[3.25rem]">
        Empowering People.
        <span className="block text-[#0F92E4]">
          Transforming Communities.
        </span>
      </h2>

      <p className="mt-6 text-lg font-medium leading-[1.85] text-slate-700">
        Human Shine Dream (HSD) is an international educational development
        initiative committed to empowering individuals, strengthening
        communities, and creating opportunities for sustainable growth.
      </p>

      <p className="mt-4 text-base leading-[1.85] text-slate-500">
        We believe every person has the potential to contribute to a better
        future when given access to knowledge, resources, opportunities,
        and the right support. Through collaboration with communities,
        institutions, educators, and local leaders, we work to encourage
        learning, leadership, inclusion, and meaningful development.
      </p>

      {/* HIGHLIGHTS */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

        <div className="flex items-start gap-3 rounded-2xl border border-[#E5EEF5] bg-white p-4 shadow-[0_8px_24px_rgba(16,45,70,0.05)]">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF3FF] text-[#0F92E4]">
            <Icon name="groups" className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-bold text-[#102D46]">People First</h3>
            <p className="mt-1 text-sm leading-6 text-slate-500">
              Putting people and their potential at the heart of development.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-2xl border border-[#E5EEF5] bg-white p-4 shadow-[0_8px_24px_rgba(16,45,70,0.05)]">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF3FF] text-[#0F92E4]">
            <Icon name="handshake" className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-bold text-[#102D46]">Shared Progress</h3>
            <p className="mt-1 text-sm leading-6 text-slate-500">
              Building stronger outcomes through collaboration and inclusion.
            </p>
          </div>
        </div>

      </div>

      {/* CTA */}
      <div className="mt-9">
        <Link
          to="/what-we-do"
          className="group inline-flex items-center gap-3 rounded-full bg-[#0F92E4] px-7 py-4 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B7BC3] hover:shadow-xl"
        >
          Explore What We Do
          <Icon
            name="arrow_forward"
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>

    </div>

    {/* RIGHT: IMAGE COMPOSITION */}
    <div className="relative mx-auto min-h-[390px] w-full max-w-[650px] px-2.5 pb-6 sm:min-h-[480px] sm:px-4 sm:pb-9 lg:min-h-[540px] lg:px-0">

      {/* Main image */}
      <div className="relative z-10 ml-auto h-[310px] w-[90%] overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(16,45,70,0.12)] sm:h-[380px] lg:h-[430px] lg:w-[85%]">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=85"
          alt="People working together in a community"
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      {/* Blue decorative corner */}
      <div className="absolute right-0 top-0 h-28 w-28 rounded-tr-[45px] border-r-4 border-t-4 border-[#0F92E4] sm:right-1 sm:top-1 lg:right-4 lg:top-1" />

      {/* Secondary image */}
      <div className="absolute bottom-6 left-0 z-20 hidden h-[145px] w-[48%] overflow-hidden rounded-[22px] border-[5px] border-[#0F92E4] shadow-[0_15px_40px_rgba(16,45,70,0.16)] sm:block sm:h-[190px] sm:border-[7px] lg:bottom-[15px] lg:h-[225px] lg:border-[8px]">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=85"
          alt="Young people learning together"
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      {/* Decorative circle */}
      <div className="absolute bottom-5 right-5 h-28 w-28 rounded-full border-[12px] border-[#DCEEFF]" />

    </div>

  </div>
</section>


{/* OUR STORY SECTION */}
<section className="relative overflow-hidden bg-[#F4FAFE] py-20 sm:py-24 lg:py-28">

  <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">

    {/* LEFT: IMAGE */}
    <div className="relative mx-auto w-full max-w-xl">

      <div className="relative z-10 overflow-hidden rounded-2xl">
        <img
          src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1100&q=85"
          alt="Community members working together"
          className="h-[380px] w-full object-cover sm:h-[480px]"
        />
      </div>

      {/* Decorative frame */}
      <div className="absolute -bottom-4 -left-4 z-0 h-40 w-40 rounded-bl-[45px] border-b-4 border-l-4 border-[#0F92E4]" />

      {/* Blue accent */}
      <div className="absolute -right-3 -top-3 z-20 h-24 w-24 rounded-tr-[40px] border-r-4 border-t-4 border-[#75C8FF]" />

      {/* Image label */}
      <div className="absolute -bottom-6 right-5 z-30 rounded-xl border border-white/20 bg-[#102D46]/90 px-6 py-4 backdrop-blur-md sm:right-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#75C8FF]">
          Our Journey
        </p>
        <p className="mt-1 text-lg font-bold text-white">
          Driven by Purpose
        </p>
      </div>

    </div>

    {/* RIGHT: STORY CONTENT */}
    <div className="max-w-2xl">

      <div className="mb-5 flex items-center gap-3">
        <span className="h-[2px] w-10 bg-[#0F92E4]" />
        <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#0F92E4]">
          Our Story
        </span>
      </div>

      <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#102D46] sm:text-4xl lg:text-5xl">
        A Journey Built on
        <span className="block text-[#0F92E4]">
          Hope and Possibility.
        </span>
      </h2>

      <p className="mt-7 text-base leading-8 text-[#475467]">
        Human Shine Dream is driven by the belief that every individual
        and community deserves the opportunity to learn, grow, and shape
        a better future.
      </p>

      <p className="mt-5 text-base leading-8 text-[#475467]">
        Our journey is rooted in the understanding that lasting development
        begins when people are empowered to recognize their potential,
        participate in decisions, and work together toward shared goals.
      </p>

      <p className="mt-5 text-base leading-8 text-[#475467]">
        Through education, collaboration, and community-centered initiatives,
        we aspire to help create pathways to opportunity and contribute to
        meaningful, sustainable change.
      </p>

      {/* Story principles */}
      <div className="mt-9 space-y-5">

        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0F92E4] text-sm font-bold text-white">
            01
          </div>
          <div>
            <h3 className="font-bold text-[#102D46]">A Belief in People</h3>
            <p className="mt-1 text-sm leading-6 text-[#475467]">
              We believe meaningful progress starts with people and their potential.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E9F5FD] text-sm font-bold text-[#0F92E4]">
            02
          </div>
          <div>
            <h3 className="font-bold text-[#102D46]">A Commitment to Communities</h3>
            <p className="mt-1 text-sm leading-6 text-[#475467]">
              We value local knowledge, participation, and shared responsibility.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E9F5FD] text-sm font-bold text-[#0F92E4]">
            03
          </div>
          <div>
            <h3 className="font-bold text-[#102D46]">A Vision for Lasting Change</h3>
            <p className="mt-1 text-sm leading-6 text-[#475467]">
              We seek to support progress that creates opportunities for future generations.
            </p>
          </div>
        </div>

      </div>

    </div>

  </div>
</section>



{/* MISSION, VISION & CORE VALUES SECTION */}
<section className="relative isolate overflow-hidden py-20 sm:py-24 lg:py-28">

  <div
    aria-hidden="true"
    className="absolute inset-0 -z-20 bg-cover bg-center"
    style={{ backgroundImage: "url('/Aboutimo/hero.jpg')" }}
  />
  <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#102D46]/85" />

  <div className="mx-auto max-w-7xl px-5 sm:px-8">

    {/* SECTION HEADER */}
    <div className="mx-auto mb-16 max-w-3xl text-center">

      <div className="mb-5 flex items-center justify-center gap-3">
        <span className="h-[2px] w-10 bg-[#75C8FF]" />
        <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#75C8FF]">
          What Guides Us
        </span>
        <span className="h-[2px] w-10 bg-[#75C8FF]" />
      </div>

      <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
        Our Mission, Vision
        <span className="text-[#75C8FF]"> & Values</span>
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/80">
        Our purpose shapes what we do, our vision guides where we are going,
        and our values define how we work with people and communities.
      </p>

    </div>

    {/* CARDS */}
    <div className="grid grid-cols-1 gap-7 md:grid-cols-3">

      {/* MISSION */}
      <div className="group relative overflow-hidden rounded-2xl border border-[#102D46]/10 bg-[#102D46] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#0F92E4]/50 sm:p-9">

        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/10 transition-transform duration-500 group-hover:scale-125" />

        <div className="relative z-10">

          <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0F92E4]/15 text-[#75C8FF]">
            <Icon name="target" className="text-2xl" />
          </div>

          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#75C8FF]">
            01 / Our Purpose
          </span>

          <h3 className="mt-3 text-2xl font-extrabold text-white">
            Our Mission
          </h3>

          <p className="mt-5 text-sm leading-7 text-white/65">
            To empower individuals and communities through education,
            collaboration, and inclusive development opportunities that
            support meaningful and sustainable progress.
          </p>

          <div className="mt-8 h-1 w-12 rounded-full bg-[#0F92E4] transition-all duration-500 group-hover:w-20" />

        </div>
      </div>

      {/* VISION */}
      <div className="group relative overflow-hidden rounded-2xl border border-[#102D46]/10 bg-[#F4FAFE] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#0F92E4]/40 sm:p-9">

        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-[#0F92E4]/10 transition-transform duration-500 group-hover:scale-125" />

        <div className="relative z-10">

          <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0F92E4]/10 text-[#0F92E4]">
            <Icon name="eye" className="text-2xl" />
          </div>

          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0F92E4]">
            02 / Our Aspiration
          </span>

          <h3 className="mt-3 text-2xl font-extrabold text-[#102D46]">
            Our Vision
          </h3>

          <p className="mt-5 text-sm leading-7 text-[#475467]">
            A world where every individual and community has the knowledge,
            resources, and opportunities to thrive and contribute to a
            sustainable and inclusive future.
          </p>

          <div className="mt-8 h-1 w-12 rounded-full bg-[#0F92E4] transition-all duration-500 group-hover:w-20" />

        </div>
      </div>

      {/* CORE VALUES */}
      <div className="group relative overflow-hidden rounded-2xl border border-[#102D46]/10 bg-[#102D46] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#0F92E4]/50 sm:p-9">

        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/10 transition-transform duration-500 group-hover:scale-125" />

        <div className="relative z-10">

          <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0F92E4]/15 text-[#75C8FF]">
            <Icon name="handshake" className="text-2xl" />
          </div>

          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#75C8FF]">
            03 / Our Principles
          </span>

          <h3 className="mt-3 text-2xl font-extrabold text-white">
            Core Values
          </h3>

          <ul className="mt-5 space-y-3 text-sm text-white/65">
            {[
              "Integrity and accountability",
              "Inclusivity and equality",
              "Collaboration and partnership",
              "Empowerment and participation",
              "Sustainability and innovation",
            ].map((value) => (
              <li key={value} className="flex items-center gap-3">
                <Icon name="check_circle" className="shrink-0 text-[#75C8FF]" />
                <span>{value}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 h-1 w-12 rounded-full bg-[#0F92E4] transition-all duration-500 group-hover:w-20" />

        </div>
      </div>

    </div>

  </div>
</section>



<section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
  {/* Subtle Ambient Backdrop Accents */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -right-28 top-12 h-96 w-96 rounded-full bg-[#EAF5FD]/70 blur-3xl"
  />
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-[#EAF5FD]/80 blur-3xl"
  />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start lg:gap-12">
      
      {/* LEFT STICKY EDITORIAL COLUMN */}
      <div className="lg:sticky lg:top-24 lg:col-span-5">
        <span className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#D4E7F7] bg-[#F2F8FD] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#0F92E4]">
          <span className="h-2 w-2 rounded-full bg-[#0F92E4]" />
          How We Work
        </span>

        <h2 className="text-3xl font-extrabold leading-[1.12] tracking-tight text-[#102D46] sm:text-4xl lg:text-[2.75rem]">
          Our approach to
          <span className="mt-1 block text-[#0F92E4]">lasting change.</span>
        </h2>

        <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
          We believe meaningful development begins with people. Our work is
          guided by an approach that values community participation, inclusive
          opportunities, strong partnerships and sustainable solutions.
        </p>

        {/* Highlighted Summary Callout Box */}
        <div className="mt-8 rounded-2xl border border-[#E2ECF4] bg-[#F7FAFC] p-6">
          <p className="text-sm leading-7 text-slate-600">
            Every step we take is guided by the belief that people and
            communities can create a brighter future together.
          </p>

          <div className="mt-4 flex items-center gap-3 border-t border-[#E2ECF4] pt-4 text-xs font-extrabold uppercase tracking-wider text-[#102D46]">
            <span className="text-[#0F92E4]">People First</span>
            <span className="h-1 w-1 rounded-full bg-[#0F92E4]" />
            <span>Lasting Progress</span>
          </div>
        </div>
      </div>

      {/* RIGHT 2x2 STAGGERED PILLAR GRID */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
        
        {/* CARD 01 */}
        <article className="group relative overflow-hidden rounded-2xl border border-[#E2ECF4] bg-[#F9FCFF] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0F92E4]/50 hover:bg-white hover:shadow-[0_16px_32px_rgba(16,45,70,0.08)] sm:p-7">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-3 -top-4 select-none text-6xl font-black text-[#0F92E4]/[0.07] transition-transform duration-300 group-hover:scale-110"
          >
            01
          </span>

          <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#0F92E4] text-sm font-extrabold text-white shadow-sm">
            01
          </div>

          <h3 className="text-xl font-extrabold text-[#102D46]">
            Community-Centred
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            We listen to communities, understand their needs and encourage
            people to take an active role in shaping their future.
          </p>

          <div className="mt-5 h-1 w-10 rounded-full bg-[#0F92E4]/30 transition-all duration-300 group-hover:w-16 group-hover:bg-[#0F92E4]" />
        </article>

        {/* CARD 02 (Staggered downward on desktop/tablet) */}
        <article className="group relative overflow-hidden rounded-2xl border border-[#E2ECF4] bg-[#F9FCFF] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0F92E4]/50 hover:bg-white hover:shadow-[0_16px_32px_rgba(16,45,70,0.08)] sm:translate-y-6 sm:p-7">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-3 -top-4 select-none text-6xl font-black text-[#0F92E4]/[0.07] transition-transform duration-300 group-hover:scale-110"
          >
            02
          </span>

          <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF3FF] text-sm font-extrabold text-[#0F92E4] transition-colors duration-300 group-hover:bg-[#0F92E4] group-hover:text-white">
            02
          </div>

          <h3 className="text-xl font-extrabold text-[#102D46]">
            Inclusive Learning
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            We encourage accessible learning and opportunities that help
            individuals develop knowledge, confidence and skills.
          </p>

          <div className="mt-5 h-1 w-10 rounded-full bg-[#0F92E4]/30 transition-all duration-300 group-hover:w-16 group-hover:bg-[#0F92E4]" />
        </article>

        {/* CARD 03 */}
        <article className="group relative overflow-hidden rounded-2xl border border-[#E2ECF4] bg-[#F9FCFF] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0F92E4]/50 hover:bg-white hover:shadow-[0_16px_32px_rgba(16,45,70,0.08)] sm:p-7">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-3 -top-4 select-none text-6xl font-black text-[#0F92E4]/[0.07] transition-transform duration-300 group-hover:scale-110"
          >
            03
          </span>

          <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF3FF] text-sm font-extrabold text-[#0F92E4] transition-colors duration-300 group-hover:bg-[#0F92E4] group-hover:text-white">
            03
          </div>

          <h3 className="text-xl font-extrabold text-[#102D46]">
            Collaboration
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            We value partnerships with institutions, educators, local leaders
            and organizations to create shared opportunities.
          </p>

          <div className="mt-5 h-1 w-10 rounded-full bg-[#0F92E4]/30 transition-all duration-300 group-hover:w-16 group-hover:bg-[#0F92E4]" />
        </article>

        {/* CARD 04 (Staggered downward + Dark Anchor Card for Visual Contrast) */}
        <article className="group relative overflow-hidden rounded-2xl border border-[#102D46] bg-[#102D46] p-6 text-white shadow-[0_14px_32px_rgba(16,45,70,0.14)] transition-all duration-300 hover:-translate-y-1 sm:translate-y-6 sm:p-7">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-3 -top-4 select-none text-6xl font-black text-white/[0.06] transition-transform duration-300 group-hover:scale-110"
          >
            04
          </span>

          <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#0F92E4] text-sm font-extrabold text-white">
            04
          </div>

          <h3 className="text-xl font-extrabold text-white">
            Sustainable Impact
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-200">
            We promote thoughtful solutions that strengthen communities and
            support positive change over the long term.
          </p>

          <div className="mt-5 h-1 w-10 rounded-full bg-[#75C8FF] transition-all duration-300 group-hover:w-16" />
        </article>

      </div>
    </div>
  </div>
</section>


      <section className="bg-[linear-gradient(135deg,#102D46_0%,#163b60_100%)] py-[84px] text-white max-[680px]:py-14">
        <div className="mx-auto w-[calc(100%-32px)] max-w-[1200px]">
          <div className="mb-6 flex items-end justify-between gap-5">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.18] bg-white/[0.12] px-3.5 py-[7px] text-[10px] font-extrabold tracking-[0.1em] text-white uppercase">
                Leadership
              </span>
              <h2 className="mt-4 text-[clamp(1.55rem,2.4vw,2.25rem)] leading-[1.16] text-white">
                People who help turn shared vision into real action.
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-5 max-[980px]:grid-cols-2 max-[680px]:grid-cols-1">
            {teamMembers.map((person) => (
              <article
                key={person.name}
                className="rounded-[26px] bg-white/[0.04] px-[18px] py-[22px] text-center"
              >
                <div className="mx-auto mb-[18px] h-40 w-40 overflow-hidden rounded-full border-4 border-white/[0.18]">
                  <img
                    className="h-full w-full object-cover"
                    src={person.image}
                    alt={person.name}
                  />
                </div>
                <div>
                  <h3 className="text-white">{person.name}</h3>
                  <p className="mt-2 text-[11px] font-extrabold tracking-[0.08em] text-[#DFF1FC] uppercase">
                    {person.title}
                  </p>
                  <p className="mt-3 text-white/80">{person.text}</p>
                  <div className="mt-[18px] flex justify-center gap-[10px]">
                    <a
                      className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.08] text-white"
                      href={`https://mail.google.com/mail/?${new URLSearchParams({
                        view: 'cm',
                        fs: '1',
                        ...(person.email ? { to: person.email } : {}),
                        su: `Message for ${person.name}`,
                        body: `Hello ${person.name},\n\n`,
                      }).toString()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Email ${person.name}`}
                    >
                      <Icon name="mail" className="material-symbols" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
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
              Learn more about HSD's work and how you can contribute.
            </h2>
            <p className="mx-auto mt-[18px] max-w-[700px] text-[#475467]">
              Whether you are a community partner, donor, volunteer, or
              institution, we welcome the opportunity to connect.
            </p>
            <div className="relative z-10 mt-[26px] flex flex-wrap justify-center gap-[14px] max-[680px]:flex-col max-[680px]:items-stretch">
              <Link
                to="/what-we-do"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border border-transparent bg-[#0F92E4] px-[22px] text-[0.92rem] font-bold tracking-[-0.01em] text-white shadow-[0_10px_20px_rgba(15,146,228,0.2)] transition duration-200 hover:-translate-y-px hover:bg-[#0B7BC3] max-[680px]:w-full"
              >
                Explore our work
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
