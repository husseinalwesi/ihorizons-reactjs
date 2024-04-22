import './DetailsPage.css';
import PokeDetailInfo from '../../Components/PokeDetailInfo';
// import { Component } from 'react';
// import axios from 'axios';
// import { LOOKUPS } from '../../const/enum';
// import { END_POINTS } from '../../const/api';
import { useSelector } from 'react-redux';

const DetailsPage: React.FC = () => {
    const data = useSelector((state: any) => state.list);
    const selectedItem = data.find((item: any) => item.id === window.location.pathname.split("/")[2]);
// class DetailsPage extends Component {    

    // state = {
    //     isLoading: false,
    //     pokeDetails: {
    //         image: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
    //         name: 'chirazad',
    //         height: '170 cm',
    //         weight: '90.5 kg',
    //         types: 'flying fire',
    //     }
    // }

    // componentDidMount(){
    //     const id = window.location.pathname.split("/")[2];
    //     if(!id) return;
    //     this.setState({isLoading: true});
    //     axios.get(`${LOOKUPS.BASE_URL}${END_POINTS.GET_POKE_DETAILS_BY_ID(id)}`).then(res => {
    //       const data = res.data;
    //       this.setState({
    //         pokeDetails: {
    //             image: data.sprites.front_default,
    //             name: data.name,
    //             height: `${data.height} cm`,
    //             weight: `${data.weight} kg`,
    //             types: data.types.map((item: any) => item.type.name).join(" "),
    //         },
    //         isLoading: false
    //       })
    //     })
    //   }

    return (
        <ul className="pocke-details">                    
            <li className="pocke-detail-img-container">
                <img className="pocke-detail-img"
                    src={selectedItem?.details?.sprites?.front_default} alt={selectedItem?.name} title={selectedItem?.name} />
            </li>
            <PokeDetailInfo keyTitle="Name" value={selectedItem?.name} />
            <PokeDetailInfo keyTitle="Height" value={selectedItem?.details?.height + ' cm'} />
            <PokeDetailInfo keyTitle="Weight" value={selectedItem?.details?.weight + ' kg'} />
            <PokeDetailInfo keyTitle="Types" value={selectedItem?.details?.types.map((item: any) => item.type.name).join(" ")} />
        </ul>
    );

    // render(){
    //     if (selectedItem.isLoading) {
    //         return <div>Loading...</div>;
    //     }else{
    //         return (
    //             <ul className="pocke-details">                    
    //                 <li className="pocke-detail-img-container">
    //                     <img className="pocke-detail-img"
    //                         src={selectedItem.pokeDetails.image} alt={selectedItem.pokeDetails.name} title={selectedItem.pokeDetails.name} />
    //                 </li>
    //                 <PokeDetailInfo keyTitle="Name" value={selectedItem.pokeDetails.name} />
    //                 <PokeDetailInfo keyTitle="Height" value={selectedItem.pokeDetails.height} />
    //                 <PokeDetailInfo keyTitle="Weight" value={selectedItem.pokeDetails.weight} />
    //                 <PokeDetailInfo keyTitle="Types" value={selectedItem.pokeDetails.types} />
    //             </ul>                
    //         )
    //     }
    // }
}

export default DetailsPage;
