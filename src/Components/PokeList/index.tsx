import './PokeList.css';
import PokeListItem from '../PokeListItem';
import { Component } from 'react';

interface ChildProps {
  items: Array<any>;
}


class PokeList extends Component<ChildProps>{
  render(){

    const PokeListItems = (this.props.items || []).map((item: any, index: number) => {
      return (
        <PokeListItem key={'poke-item-' + index} pokeDetails={item} />
      )
    })

    return (
      <ul className="pocke-list">
        {PokeListItems}
      </ul>
    )
  }

}

export default PokeList;
