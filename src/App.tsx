import './App.css';
import HomePage from './Pages/HomePage';
import DetailsPage from './Pages/DetailsPage';
import PageNotFound from './Pages/PageNotFound';
import Header from './Components/Header';
// import DataComponent from './Components/DataComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux';
import { updateDataList } from './store/actions';
import axios from 'axios';
import { LOOKUPS } from './const/enum';
import { END_POINTS } from './const/api';


// function App() {
  const App: React.FC = () => {
    // const data = useSelector((state: any) => state.list);
    const dispatch = useDispatch();
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(`${LOOKUPS.BASE_URL}${END_POINTS.GET_POKE_LIST}`);
          const pokeListPromises = res.data.results.map(async (item: any) => {
            const url = item.url;
            const id = url.split("/")[6];
            const resInner = await axios.get(url);
            return {
              id: id,
              name: item.name,
              url: url,
              details: resInner.data,
              image: '',
            };
          });
        
          const pokeList = await Promise.all(pokeListPromises);
        
          dispatch(updateDataList({ list: pokeList }));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, [dispatch]); // Empty dependency array ensures the effect runs only once after mount

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' Component={HomePage} />
          <Route path='/details/:id' Component={DetailsPage} />
          <Route path="*" Component={PageNotFound} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
