import { Link } from 'react-router-dom';
import Icon from '../components/Icon';

const pathways = [
  {
    icon: 'diversity_3',
    title: 'Volunteer',
    description:
      'Share your time and skills through mentoring, community activities, and program support.',
    action: 'Contact our team',
    to: '/contact',
  },
  {
    icon: 'handshake',
    title: 'Partner with us',
    description:
      'Work with HSD to develop community-led initiatives and expand opportunities together.',
    action: 'Explore partnerships',
    to: '/partnerships',
  },
  {
    icon: 'trending_up',
    title: 'Support our work',
    description:
      'Help sustain programs that strengthen learning, leadership, and local communities.',
    action: 'Make a donation',
    to: '/donate',
  },
  {
    icon: 'public',
    title: 'Explore our programs',
    description:
      'Discover the projects and activities creating practical pathways for positive change.',
    action: 'View our programs',
    to: '/projects',
  },
];

export default function GetInvolved() {
  return (
    <>
      <section className="relative isolate flex min-h-[400px] items-center overflow-hidden bg-[#102D46] sm:min-h-[460px] lg:min-h-[500px]">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=85')",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-[#102D46]/55" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#102D46]/90 via-[#102D46]/65 to-[#102D46]/20" />
        <div className="pointer-events-none absolute right-12 top-12 hidden h-24 w-24 rounded-tr-[45px] border-r-2 border-t-2 border-[#75C8FF]/70 lg:block" />

        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <div className="max-w-3xl translate-y-6 sm:translate-y-7">
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-[#75C8FF]">
                Get Involved
              </span>
            </div>
            <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Be part of building brighter futures.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Bring your time, ideas, skills, or support to work that empowers
              people and strengthens communities.
            </p>
            <div className="mt-9 flex items-center gap-3 text-sm">
              <Link
                to="/"
                className="font-medium text-white/65 transition-colors hover:text-[#75C8FF]"
              >
                Home
              </Link>
              <Icon name="chevron_right" className="text-white/40" />
              <span className="font-semibold text-[#75C8FF]">Get Involved</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#0F92E4]">
              Ways to take part
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#102D46] sm:text-4xl">
              Make a difference in a way that works for you.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#475467]">
              Whether you are an individual, organization, or supporter, there
              are many ways to contribute to lasting community-led change.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pathways.map((pathway) => (
              <article
                key={pathway.title}
                className="flex flex-col rounded-3xl border border-[#102D46]/10 bg-[#F4FAFE] p-6"
              >
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0F92E4]/10 text-[#0F92E4]">
                  <Icon name={pathway.icon} className="text-2xl" />
                </span>
                <h3 className="text-lg font-bold text-[#102D46]">
                  {pathway.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-[#475467]">
                  {pathway.description}
                </p>
                <Link
                  to={pathway.to}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0F92E4] transition-colors hover:text-[#0B7BC3]"
                >
                  {pathway.action}
                  <Icon name="arrow_forward" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
