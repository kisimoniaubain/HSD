import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setStatus('Please enter a valid email address.');
      return;
    }

    setStatus('Thanks for subscribing. Updates will be sent when available.');
    setEmail('');
  };

  return (
    <section className="newsletter">
      <div className="newsletter__content">
        <div>
          <span className="eyebrow">Stay informed</span>
          <h2>Get updates from HSD.</h2>
        </div>

        <form onSubmit={handleSubmit} className="newsletter-form">
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter your email" aria-label="Email address" />
          <button type="submit" className="btn btn-primary">Subscribe</button>
        </form>
        {status ? <p className="newsletter-status">{status}</p> : null}
      </div>
    </section>
  );
}
