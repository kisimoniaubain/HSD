import { useState } from 'react';
import CallToAction from '../components/CallToAction';
import PageHero from '../components/PageHero';

const partnershipTypes = [
  'Development Organizations',
  'NGOs and Community-Based Organizations',
  'Government and Public Institutions',
  'Corporate and Private Sector',
  'Educational Institutions',
  'Foundations and Philanthropic Organizations',
  'Individual Supporters',
];

const partnershipModels = [
  'Program partnerships',
  'Technical partnerships',
  'Knowledge sharing',
  'Resource mobilization',
  'Community initiatives',
  'Institutional collaboration',
];

const partnershipSteps = [
  'Initial Contact',
  'Discussion and Consultation',
  'Partnership Proposal',
  'Agreement and Planning',
  'Implementation',
  'Monitoring and Review',
];

const partnerPlaceholders = ['Future partner', 'Community network', 'Institutional collaborator', 'Research alliance', 'Youth organization', 'Public sector partner'];

export default function Partnerships() {
  const [formData, setFormData] = useState({
    organizationName: '',
    contactPerson: '',
    email: '',
    phone: '',
    organizationType: 'Development organization',
    partnershipArea: 'Education and learning',
    description: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { organizationName, contactPerson, email, description } = formData;

    if (!organizationName || !contactPerson || !email || !description) {
      setError('Please complete the required fields before submitting your inquiry.');
      setStatus('');
      return;
    }

    const validEmail = /\S+@\S+\.\S+/.test(email);
    if (!validEmail) {
      setError('Please provide a valid email address.');
      setStatus('');
      return;
    }

    setError('');
    setStatus('Thank you. Your partnership inquiry has been received and will be reviewed by the HSD team.');
    setFormData({
      organizationName: '',
      contactPerson: '',
      email: '',
      phone: '',
      organizationType: 'Development organization',
      partnershipArea: 'Education and learning',
      description: '',
      message: '',
    });
  };

  return (
    <>
      <PageHero
        tag="Partnerships"
        title="Together, We Can Create Greater Impact."
        intro="HSD collaborates with organizations and institutions that want to strengthen education, leadership, and community opportunity in practical and sustainable ways."
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"
      />

      <section className="section-shell">
        <div className="max-width-shell two-column-layout">
          <div>
            <span className="eyebrow">Why partner with us?</span>
            <h2>Strategic collaboration can unlock shared learning and lasting local change.</h2>
          </div>
          <p>
            Partnerships are central to HSD’s work. By combining local insight, institutional capacity, and community trust, we can design programs that are more relevant, resilient, and responsive to the people they serve.
          </p>
        </div>
      </section>

      <section className="section-shell soft-surface">
        <div className="max-width-shell">
          <div className="section-heading-row">
            <div>
              <span className="eyebrow">Partnership opportunities</span>
              <h2>We welcome collaboration with mission-aligned partners.</h2>
            </div>
          </div>

          <div className="columns-grid three-up">
            {partnershipTypes.map((type) => (
              <article key={type} className="info-card">
                <h3>{type}</h3>
                <p>We work with partners who want to co-create solutions, expand capacity, and improve access to community-centered opportunity.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="max-width-shell">
          <div className="section-heading-row">
            <div>
              <span className="eyebrow">Partnership models</span>
              <h2>Flexible collaboration formats for different goals and capacities.</h2>
            </div>
          </div>

          <div className="columns-grid three-up">
            {partnershipModels.map((model) => (
              <article key={model} className="info-card highlight-card">
                <h3>{model}</h3>
                <p>Potential collaboration areas can be tailored to match organizational strengths, community priorities, and implementation needs.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell soft-surface">
        <div className="max-width-shell">
          <div className="section-heading-row">
            <div>
              <span className="eyebrow">Process</span>
              <h2>A clear and collaborative process from first contact to implementation.</h2>
            </div>
          </div>

          <div className="steps-grid">
            {partnershipSteps.map((step, index) => (
              <div className="step-card" key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="max-width-shell">
          <div className="section-heading-row">
            <div>
              <span className="eyebrow">Existing partners</span>
              <h2>We continue to grow our network of mission-aligned collaborators.</h2>
            </div>
          </div>

          <div className="logo-grid">
            {partnerPlaceholders.map((partner) => (
              <div key={partner} className="logo-pill">{partner}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="max-width-shell inquiry-layout">
          <div className="inquiry-heading">
            <span className="eyebrow">Partner inquiry</span>
            <h2>Tell us about your organization and how you would like to collaborate.</h2>
            <p>Use the form to share your interests, needs, or partnership concepts. We will review your inquiry and respond with next steps.</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              <label>
                Organization Name
                <input type="text" name="organizationName" value={formData.organizationName} onChange={handleChange} placeholder="Organization or institution" />
              </label>
              <label>
                Contact Person
                <input type="text" name="contactPerson" value={formData.contactPerson} onChange={handleChange} placeholder="Your name" />
              </label>
              <label>
                Email Address
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="name@organization.org" />
              </label>
              <label>
                Phone Number
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Optional" />
              </label>
            </div>

            <div className="form-grid">
              <label>
                Organization Type
                <select name="organizationType" value={formData.organizationType} onChange={handleChange}>
                  <option>Development organization</option>
                  <option>NGO</option>
                  <option>Government institution</option>
                  <option>Private sector</option>
                  <option>Education institution</option>
                  <option>Foundation</option>
                  <option>Individual supporter</option>
                </select>
              </label>
              <label>
                Proposed Partnership Area
                <select name="partnershipArea" value={formData.partnershipArea} onChange={handleChange}>
                  <option>Education and learning</option>
                  <option>Leadership and youth</option>
                  <option>Technology and digital access</option>
                  <option>Community development</option>
                  <option>Capacity building</option>
                </select>
              </label>
            </div>

            <label>
              Partnership Description
              <textarea name="description" value={formData.description} onChange={handleChange} rows="5" placeholder="Briefly describe your idea or collaboration interest." />
            </label>

            <label>
              Message
              <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Add any additional context here." />
            </label>

            {error ? <p className="form-message form-error">{error}</p> : null}
            {status ? <p className="form-message form-success">{status}</p> : null}

            <button type="submit" className="btn btn-primary">Submit inquiry</button>
          </form>
        </div>
      </section>

      <CallToAction
        eyebrow="Let’s build something meaningful"
        title="Let’s Build Something Meaningful Together."
        description="If you are exploring a partnership, investment, or collaborative initiative, we would love to hear from you."
        primaryTo="/contact"
        primaryLabel="Contact us"
        secondaryTo="/what-we-do"
        secondaryLabel="Explore work"
      />
    </>
  );
}
