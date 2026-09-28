interface TeamMemberCardProps {
  name: string;
  position: string;
  major: string;
  year: string;
  photoUrl: string;
  linkedinUrl: string;
}

function TeamMemberCard({ name, position, major, year, photoUrl, linkedinUrl }: TeamMemberCardProps) {
  return (
    <div className="team-card">
      <img src={photoUrl} alt={`${name}`} />
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="team-card-name">
        {name}
      </a>
      <p className="team-card-position">{position}</p>
      <div className="team-card-divider" />
      <p className="team-card-meta">{major}</p>
      <p className="team-card-meta">{year}</p>
    </div>
  );
}

export default TeamMemberCard;