import { Link } from 'react-router-dom';

export default function PrimaryButton({ to, href, children, className = '', onClick, type = 'button' }) {
  const classes = `btn btn-primary ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
