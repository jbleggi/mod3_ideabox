import './Card.css';
import TrashButton from '../TrashButton/TrashButton';

const Card = ({ title, description, id, deleteIdea }) => {
  return (
    <div className='postit'>
      <h3>{title}</h3>
      <p>{description}</p>
      <TrashButton onClick={() => deleteIdea(id)} />
    </div>
  )
}

export default Card;