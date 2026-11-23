import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { footerIcons } from '../data/footerIcons';

export default function Footer() {
  return (
 <footer className="relative overflow-hidden bg-[#102D46] text-white">

      {/* Decorative background accents */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/5" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full border border-white/5" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

        {/* Main footer */}
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pt-16 pb-8 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:gap-10 lg:pt-20 lg:pb-10">

          {/* Organization */}
          <div>
            <Link to="/" className="mb-6 inline-flex items-center">
              <img
                src="/logo.png"
                alt="Human Shine Dream"
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </Link>

            <h3 className="mb-4 max-w-xs text-2xl font-bold leading-tight text-white">
              Creating opportunities.
              <span className="text-[#0F92E4]"> Inspiring change.</span>
            </h3>

            <p className="max-w-sm text-xs leading-6 text-white/50">
              Human Shine Dream is committed to empowering people,
              strengthening communities, and creating opportunities
              for a brighter and more inclusive future.
            </p>

            {/* Social media */}
            <div className="mt-7 flex items-center gap-3">
              {[
                { name: "facebook", href: "#" },
                { name: "instagram", href: "#" },
                { name: "linkedin", href: "#" },
                { name: "youtube", href: "#" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-[#0F92E4] hover:bg-[#0F92E4] hover:text-white"
                >
                  <Icon icon={footerIcons[social.name]} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="footer-section-heading text-sm font-bold uppercase tracking-[0.15em] text-white">
              Quick Links
            </h4>

            <ul className="space-y-2 text-sm text-white/65">
              <li><Link to="/" className="transition-colors hover:text-[#75C8FF]">Home</Link></li>
              <li><Link to="/who-we-are" className="transition-colors hover:text-[#75C8FF]">Who We Are</Link></li>
              <li><Link to="/what-we-do" className="transition-colors hover:text-[#75C8FF]">What We Do</Link></li>
              <li><Link to="/projects" className="transition-colors hover:text-[#75C8FF]">Our Projects</Link></li>
              <li><Link to="/our-impact" className="transition-colors hover:text-[#75C8FF]">Our Impact</Link></li>
              <li><Link to="/blog" className="transition-colors hover:text-[#75C8FF]">Latest News</Link></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="footer-section-heading text-sm font-bold uppercase tracking-[0.15em] text-white">
              Explore
            </h4>

            <ul className="space-y-2 text-sm text-white/65">
              <li><Link to="/partnerships" className="transition-colors hover:text-[#75C8FF]">Our Partners</Link></li>
              <li><Link to="/what-we-do" className="transition-colors hover:text-[#75C8FF]">Our Programs</Link></li>
              <li><Link to="/projects" className="transition-colors hover:text-[#75C8FF]">Featured Projects</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-[#75C8FF]">Get Involved</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-[#75C8FF]">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-section-heading text-sm font-bold uppercase tracking-[0.15em] text-white">
              Get In Touch
            </h4>

            <p className="max-w-sm text-xs leading-6 text-white/50">
              Have a question, an idea, or want to work with us?
              We would love to hear from you.
            </p>

            <div className="space-y-5 text-sm">

              <div className="flex items-start gap-3">
                <Icon icon={footerIcons.mail} className="mt-1 h-5 w-5 shrink-0 text-[#75C8FF]" />
                <a
                  href="mailto:humanshinedream.org@gmail.com"
                  className="text-white/70 transition-colors hover:text-[#75C8FF]"
                >
                  humanshinedream.org@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Icon icon={footerIcons.location} className="mt-1 h-5 w-5 shrink-0 text-[#75C8FF]" />
                <span className="text-white/70">
                  Contact us for our office location
                </span>
              </div>

            </div>

            <Link
              to="/contact"
              className="btn btn-primary mt-7"
            >
              Contact Our Team
              <Icon icon={footerIcons.arrow} className="h-4 w-4" />
            </Link>
          </div>

        </div>

        {/* Bottom footer */}
<div className="flex flex-col items-center justify-center gap-5 pt-4 pb-2 text-center">

  <p className="text-xs leading-6 text-white/45">
    © {new Date().getFullYear()}{" "}
    <Link
      to="/"
      className="font-semibold text-[#0F92E4] transition-colors hover:text-[#75C8FF]"
    >
      Human Shine Dream
    </Link>
    . All rights reserved.
  </p>

</div>

      </div>
    </footer>
  );
}
