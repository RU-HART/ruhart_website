import { useNavigate } from 'react-router-dom';

interface CardProps {
  title: string;
  description: string;
  route: string;
}

function Card({ title, description, route }: CardProps) {
  const navigate = useNavigate();

  return (
    <button className="card" onClick={() => navigate(route)}>
      <h2>{title}</h2>
      <p>{description}</p>
    </button>
  );
}



export default Card;