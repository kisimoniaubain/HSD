const icons = {
  public: <><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" /></>,
  diversity_3: <><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
  article: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M8 13h8M8 17h8M8 9h2" /></>,
  mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></>,
  location_on: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  call: <><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3.2a2 2 0 0 1-.6 1.7L7.2 10.4a16 16 0 0 0 6 6l1.8-1.8a2 2 0 0 1 1.7-.6l3.2.5a2 2 0 0 1 2.1 2.4Z" /></>,
  schedule: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
  check_circle: <><path d="M22 11.1V12a10 10 0 1 1-5.9-9.1" /><path d="m9 11 3 3L22 4" /></>,
  arrow_outward: <><path d="M7 17 17 7M7 7h10v10" /></>,
  arrow_forward: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  chevron_right: <path d="m9 18 6-6-6-6" />,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>,
  eye: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></>,
  check: <><path d="m5 12 4 4L19 6" /></>,
  groups: <><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM20 8v6M23 11h-6" /></>,
  work: <><rect x="3" y="7" width="18" height="14" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" /></>,
  share: <><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="m8.6 10.5 6.8-4M8.6 13.5l6.8 4" /></>,
  description: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M8 13h8M8 17h8" /></>,
  handshake: <><path d="m11 17 2 2a2 2 0 0 0 3-1l1-1" /><path d="m5 12 4-4a3 3 0 0 1 4 0l1 1 1-1a3 3 0 0 1 4 0l1 1" /><path d="m3 10-1 1 5 6 2-2M21 10l1 1-5 6-2-2M9 14l3 3M12 11l4 4" /></>,
  trending_up: <><path d="M3 17 9 11l4 4 8-8" /><path d="M15 7h6v6" /></>,
  facebook: <><path d="M0 0h16v16H0z" fill="none" stroke="none" /><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58-.001-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951Z" fill="currentColor" stroke="none" /></>,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" /></>,
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 10v7M8 7v.01M12 17v-7m0 3a3 3 0 0 1 6 0v4" /></>,
  youtube: <><path d="M22 12s0-3.5-.45-5.2a2.8 2.8 0 0 0-1.95-1.95C17.9 4.4 12 4.4 12 4.4s-5.9 0-7.6.45A2.8 2.8 0 0 0 2.45 6.8C2 8.5 2 12 2 12s0 3.5.45 5.2a2.8 2.8 0 0 0 1.95 1.95c1.7.45 7.6.45 7.6.45s5.9 0 7.6-.45a2.8 2.8 0 0 0 1.95-1.95C22 15.5 22 12 22 12Z" /><path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none" /></>,
};

export default function Icon({ name, className = '' }) {
  const IconComponent = icons[name];

  if (!IconComponent) {
    throw new Error(`Unknown icon: ${name}`);
  }

  return (
    <svg
      className={`icon ${className}`.trim()}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {IconComponent}
    </svg>
  );
}
