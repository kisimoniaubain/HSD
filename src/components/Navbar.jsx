import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navItems } from '../data/navigation';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand" aria-label="Human Shine Dream home">
          <img src="/logo.png" alt="Human Shine Dream" className="brand-logo" />
        </Link>
        <div className="brand-tagline" style={{ color: '#0f92e4bb' }} aria-label="Community Based Organisation">
          COMMUNITY
          <br />
          BASED
          <br />
          ORGANISATION
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <Link to="/donate" className="btn btn-primary header-cta">Donate</Link>
          <button type="button" className="menu-toggle" aria-label="Open menu" onClick={() => setOpen((value) => !value)}>
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'mobile-link active' : 'mobile-link')}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/donate" className="mobile-link" onClick={() => setOpen(false)}>Donate</Link>
        </div>
      )}
    </header>
  );
}
