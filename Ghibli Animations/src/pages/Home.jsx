import React, { useContext } from "react";
import FilmContext from "../context/FilmContext";
import Header from "../components/Header";
import Card from "../components/Card";
import styles from '../components/Card.module.css'


function Home () {
  const {films} = useContext(FilmContext);

  return (
    <div>
      <Header/>
      <div className='flex flex-wrap justify-evenly' >
        <Card card={films}/>
      </div>
    </div>
  );
}

export default Home;
