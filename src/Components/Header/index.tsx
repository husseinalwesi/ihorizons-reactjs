import './Header.css';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const data = useSelector((state: any) => state.list);
  const location = useLocation();
  const [pokeName, setPokeName] = useState<string>('');

  useEffect(() => {
    const selectedItem = data.find((item: any) => item.id === window.location.pathname.split("/")[2]);
    const pokeName = selectedItem?.name || '';
      setPokeName(pokeName);
  },[data, location.pathname]);


  return (
    <h1 className="page-title">
        <span className="page-title-part full-width">{pokeName ? pokeName : 'PokeReact'}</span>
        {pokeName && (
        <Link to="/" className="back-btn">
          <span>←</span>
          <span>Back</span>
        </Link>
      )}
    </h1>
  );
}

export default Header;
