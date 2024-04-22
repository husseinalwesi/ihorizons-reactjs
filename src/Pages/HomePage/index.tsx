import './HomePage.css';
import PokeList from '../../Components/PokeList';
import { useSelector } from 'react-redux';

// interface ParentState {
//   pokeList: Array<any>;
//   isLoading: boolean;
// }

// class HomePage extends Component<{}, ParentState> {
const HomePage: React.FC = () => {
    const data = useSelector((state: any) => state.list);
    // constructor(props: {}) {
    //   super(props);
    //   this.state = {
    //     isLoading: false,
    //     pokeList: []
    //   };
    // }

    // state = {
    //   isLoading: false,
    //   pokeList: []
    // }

    // componentDidMount(){
    //   this.setState({isLoading: true});
    //   axios.get(`${LOOKUPS.BASE_URL}${END_POINTS.GET_POKE_LIST}`).then(res => {
    //     const data = res.data;
    //     this.setState({
    //       pokeList: data.results.map( (item: any) => {
    //         const id = item.url.split("/")[6];
    //         return {
    //           id: id,
    //           name: item.name,
    //           image: '',
    //         }
    //       }),
    //       isLoading: false
    //     })
    //   })
    // }

    return (
      <div>
        <PokeList items={data} />
      </div>
    );

    // render(){
    //   if (this.state.isLoading) {
    //     return <div>Loading...</div>;
    //   }else{
    //       return (

    //       )
    //   }
    // }
}

export default HomePage;
