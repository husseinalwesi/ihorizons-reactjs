import './PokeListItem.css';
import { Link } from 'react-router-dom';

function PokeListItem(props: any) {
  return (
    <li className="pocke-item">
      <Link to={'/details/' + props.pokeDetails.id}>
          <div className="pocke-item-img-container">
              <img className="pocke-item-img"
                  src={props.pokeDetails.details.sprites.front_default} alt={props.pokeDetails.name} title={props.pokeDetails.name} />
          </div>
          <span className="pocke-item-title">{props.pokeDetails.name}</span>
      </Link>
    </li>
  );
}

export default PokeListItem;
