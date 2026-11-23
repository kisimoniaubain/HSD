import ContactForm from '../components/ContactForm';
import PageHero from '../components/PageHero';
import Icon from '../components/Icon';

const contactCards = [
  { icon: 'mail', title: 'Email', value: 'contact@humanshinedream.org' },
  { icon: 'call', title: 'Telephone', value: '+41 22 730 81 11' },
  { icon: 'location_on', title: 'Physical address', value: 'Global Secretariat, Geneva & Seoul (editable placeholder)' },
  { icon: 'schedule', title: 'Office hours', value: 'Monday to Friday • 9:00–17:00 CET' },
  { icon: 'groups', title: 'Social media', value: '@humanshinedream' },
];

const faqs = [
  { question: 'What does HSD do?', answer: 'HSD connects education, leadership, and community development work to help local communities access opportunities and strengthen sustainable growth.' },
  { question: 'Can I volunteer?', answer: 'Yes. Community support, mentorship, and partnership opportunities are welcome, depending on the focus and timing of active programs.' },
  { question: 'How can an organization partner with HSD?', answer: 'You can reach out through the contact form or partnership inquiry to share your interests, ideas, and collaboration goals.' },
  { question: 'Do you work on specific projects?', answer: 'HSD supports a portfolio of initiatives in learning, leadership, digital access, and community development. Project details can be explored on the Projects page.' },
];

export default function Contact() {
  return (
    <>
      <PageHero
        tag="Contact"
        title="Let’s Start a Conversation."
        intro="Whether you are reaching out as an individual, partner, educator, or supporter, we would love to hear from you."
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
      />

      <section className="section-shell">
        <div className="max-width-shell contact-box">
          <div className="contact-intro">
            <span className="eyebrow">Get in touch</span>
            <h2>We welcome questions, ideas, and collaboration requests.</h2>
            <p>Use the information below or reach out through the form to start a conversation about projects, partnerships, volunteering, or support.</p>
            <div className="contact-card-list">
              {contactCards.map((card) => (
                <div key={card.title} className="mini-contact-card">
                  <Icon name={card.icon} className="material-symbols" />
                  <div>
                    <strong>{card.title}</strong>
                    <p>{card.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="section-shell soft-surface">
        <div className="max-width-shell faq-layout">
          <div>
            <span className="eyebrow">FAQ</span>
            <h2>Frequently asked questions.</h2>
          </div>

          <div className="faq-list">
            {faqs.map((item) => (
              <div key={item.question} className="faq-item">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
