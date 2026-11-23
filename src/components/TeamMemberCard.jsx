import Icon from './Icon';

export default function TeamMemberCard({ person }) {
  return (
    <article className="team-card">
      <div className="team-avatar">
        <img src={person.image} alt={person.name} />
      </div>
      <div className="team-body">
        <h3>{person.name}</h3>
        <p className="team-role">{person.title}</p>
        <p className="team-copy">{person.text}</p>
        <div className="social-row">
          <span aria-label={`${person.name} professional profile`}><Icon name="work" className="material-symbols" /></span>
          <span aria-label={`Share ${person.name}'s profile`}><Icon name="share" className="material-symbols" /></span>
        </div>
      </div>
    </article>
  );
}
