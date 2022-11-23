import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header () {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <div>
    <header className='flex justify-center space-x-44 bg-slate-800 text-white'>
      <Link to='/'>Studio Ghibli</Link>
      <Link to='/favorites'>Favoritos❤</Link>
    </header>
      <h1 className='flex justify-center font-bold text-xl'>{ isHome ? 'Filmes' : 'Favoritos' }</h1>
    </div>
  );
}

export default Header;
