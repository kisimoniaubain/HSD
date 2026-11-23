import { useState } from 'react';

const initialState = {
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  inquiryCategory: 'General inquiry',
  message: '',
};

export default function ContactForm({ compact = false }) {
  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { fullName, email, subject, message } = formData;

    if (!fullName || !email || !subject || !message) {
      setError('Please complete all required fields before submitting.');
      setSuccess('');
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      setSuccess('');
      return;
    }

    setError('');
    setIsLoading(true);
    setSuccess('');

    window.setTimeout(() => {
      setIsLoading(false);
      setSuccess('Thank you. Your message has been received and our team will be in touch shortly.');
      setFormData(initialState);
    }, 900);
  };

  return (
    <form className={compact ? 'contact-form compact' : 'contact-form'} onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <label>
          Full name
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Your full name" />
        </label>

        <label>
          Email address
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" />
        </label>

        <label>
          Phone number
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Optional" />
        </label>

        <label>
          Subject
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="How can we help?" />
        </label>
      </div>

      <label>
        Inquiry category
        <select name="inquiryCategory" value={formData.inquiryCategory} onChange={handleChange}>
          <option>General inquiry</option>
          <option>Partnership</option>
          <option>Volunteering</option>
          <option>Project collaboration</option>
          <option>Press and media</option>
        </select>
      </label>

      <label>
        Message
        <textarea name="message" value={formData.message} onChange={handleChange} rows="6" placeholder="Tell us a little about your inquiry..." />
      </label>

      {error ? <p className="form-message form-error">{error}</p> : null}
      {success ? <p className="form-message form-success">{success}</p> : null}

      <button type="submit" className="btn btn-primary" disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Send message'}
      </button>
    </form>
  );
}
