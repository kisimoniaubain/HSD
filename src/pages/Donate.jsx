import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import PageHero from '../components/PageHero';

const suggestedAmounts = [25, 50, 100, 250];

const givingOptions = [
  {
    icon: 'groups',
    title: 'People and communities',
    description: 'Support community-centered learning, leadership, and opportunity.',
  },
  {
    icon: 'article',
    title: 'Programs and projects',
    description: 'Help strengthen initiatives shaped around local priorities.',
  },
  {
    icon: 'public',
    title: 'Long-term capacity',
    description: 'Contribute to the partnerships and systems that help work continue.',
  },
];

const faqs = [
  {
    question: 'How do I complete a donation?',
    answer: 'Choose an amount and giving frequency, then prepare a donation request email. HSD will reply with the available secure payment options. This site does not collect or store payment-card details.',
  },
  {
    question: 'Can I choose what my donation supports?',
    answer: 'Yes. You can indicate a preferred focus in the form. HSD will confirm how your request can be directed when responding.',
  },
  {
    question: 'Can I make a recurring donation?',
    answer: 'You can select monthly giving in the form. HSD will confirm the available arrangement and next steps by email.',
  },
];

export default function Donate() {
  const [amount, setAmount] = useState('50');
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState('One-time');
  const [currency, setCurrency] = useState('USD');
  const [focus, setFocus] = useState('Where it is needed most');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');
  const [error, setError] = useState('');
  const [emailHref, setEmailHref] = useState('');

  const selectedAmount = amount === 'custom' ? customAmount : amount;
  const clearPreparedEmail = () => setEmailHref('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const numericAmount = Number(selectedAmount);

    if (!name.trim() || !email.trim()) {
      setError('Please enter your name and email address.');
      setEmailHref('');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      setEmailHref('');
      return;
    }

    if (!Number.isFinite(numericAmount) || numericAmount < 1) {
      setError('Choose a suggested amount or enter a custom amount of at least 1.');
      setEmailHref('');
      return;
    }

    const subject = `Donation request - ${currency} ${numericAmount}`;
    const body = [
      'Hello HSD,',
      '',
      'I would like to arrange a donation.',
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      `Amount: ${currency} ${numericAmount}`,
      `Frequency: ${frequency}`,
      `Preferred focus: ${focus}`,
      note.trim() ? `Note: ${note.trim()}` : '',
      '',
      'Please share the available secure payment options and next steps.',
    ].filter(Boolean).join('\n');

    setError('');
    setEmailHref(`mailto:contact@humanshinedream.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  return (
    <>
      <PageHero
        tag="Donate"
        title="Help opportunity reach more people."
        intro="Your support can help HSD strengthen community-centered learning, leadership, and access to opportunity. Choose how you would like to give and we’ll help with the next steps."
        image="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80"
      />

      <section className="section-shell donation-section">
        <div className="max-width-shell donation-layout">
          <div className="donation-copy">
            <span className="eyebrow">Why give</span>
            <h2>Make room for people and communities to thrive.</h2>
            <p>
              Every contribution helps sustain the relationships, learning opportunities, and local collaboration at the heart of HSD’s work. Choose a focus or leave your gift flexible.
            </p>

            <div className="giving-options">
              {givingOptions.map((option) => (
                <article className="giving-option" key={option.title}>
                  <span className="giving-option-icon"><Icon name={option.icon} /></span>
                  <div>
                    <h3>{option.title}</h3>
                    <p>{option.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <form className="donation-form" onSubmit={handleSubmit} noValidate>
            <div>
              <span className="eyebrow">Your contribution</span>
              <h2>Choose an amount</h2>
            </div>

            <div className="donation-frequency" role="group" aria-label="Giving frequency">
              {['One-time', 'Monthly'].map((option) => (
                <button
                  type="button"
                  key={option}
                  className={frequency === option ? 'donation-frequency-option active' : 'donation-frequency-option'}
                  aria-pressed={frequency === option}
                  onClick={() => {
                    setFrequency(option);
                    clearPreparedEmail();
                  }}
                >
                  {option}
                </button>
              ))}
            </div>

            <label className="donation-label" htmlFor="donation-currency">Currency</label>
            <select id="donation-currency" value={currency} onChange={(event) => {
              setCurrency(event.target.value);
              clearPreparedEmail();
            }}>
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="CHF">CHF</option>
            </select>

            <div className="donation-amounts" role="group" aria-label="Suggested donation amount">
              {suggestedAmounts.map((value) => (
                <button
                  type="button"
                  key={value}
                  className={amount === String(value) ? 'donation-amount active' : 'donation-amount'}
                  aria-pressed={amount === String(value)}
                  onClick={() => {
                    setAmount(String(value));
                    setCustomAmount('');
                    clearPreparedEmail();
                  }}
                >
                  {currency === 'EUR' ? '€' : currency === 'CHF' ? 'CHF ' : '$'}{value}
                </button>
              ))}
              <button
                type="button"
                className={amount === 'custom' ? 'donation-amount active' : 'donation-amount'}
                aria-pressed={amount === 'custom'}
                onClick={() => {
                  setAmount('custom');
                  clearPreparedEmail();
                }}
              >
                Custom
              </button>
            </div>

            {amount === 'custom' ? (
              <label className="donation-label" htmlFor="custom-amount">
                Custom amount
                <input
                  id="custom-amount"
                  type="number"
                  min="1"
                  step="1"
                  value={customAmount}
                  onChange={(event) => {
                    setCustomAmount(event.target.value);
                    clearPreparedEmail();
                  }}
                  placeholder="Enter an amount"
                  required
                />
              </label>
            ) : null}

            <label className="donation-label" htmlFor="donation-focus">
              Preferred focus
              <select id="donation-focus" value={focus} onChange={(event) => {
                setFocus(event.target.value);
                clearPreparedEmail();
              }}>
                <option>Where it is needed most</option>
                <option>Learning and education</option>
                <option>Youth leadership</option>
                <option>Community initiatives</option>
              </select>
            </label>

            <div className="donation-form-grid">
              <label className="donation-label" htmlFor="donor-name">
                Name
                <input id="donor-name" type="text" autoComplete="name" value={name} onChange={(event) => {
                  setName(event.target.value);
                  clearPreparedEmail();
                }} required />
              </label>
              <label className="donation-label" htmlFor="donor-email">
                Email
                <input id="donor-email" type="email" autoComplete="email" value={email} onChange={(event) => {
                  setEmail(event.target.value);
                  clearPreparedEmail();
                }} required />
              </label>
            </div>

            <label className="donation-label" htmlFor="donation-note">
              Note (optional)
              <textarea id="donation-note" rows="3" value={note} onChange={(event) => {
                setNote(event.target.value);
                clearPreparedEmail();
              }} placeholder="Add a note for the HSD team" />
            </label>

            {error ? <p className="form-message form-error" role="alert">{error}</p> : null}
            {emailHref ? (
              <div className="donation-next-step" role="status">
                <p>Your donation request is ready. Send it to HSD to receive secure payment instructions.</p>
                <a className="btn btn-primary" href={emailHref}>Email HSD to continue</a>
              </div>
            ) : (
              <button className="btn btn-primary donation-submit" type="submit">Continue with donation</button>
            )}

            <p className="donation-disclaimer">
              No payment details are collected on this website. HSD will confirm available payment methods by email.
            </p>
          </form>
        </div>
      </section>

      <section className="section-shell soft-surface">
        <div className="max-width-shell faq-layout">
          <div>
            <span className="eyebrow">Donation questions</span>
            <h2>Giving with confidence.</h2>
            <p className="donation-faq-note">Need another way to support HSD? <Link to="/contact">Contact our team</Link>.</p>
          </div>
          <div className="faq-list">
            {faqs.map((item) => (
              <article key={item.question} className="faq-item">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
