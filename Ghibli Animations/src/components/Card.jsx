import React, { useContext } from "react";
import FilmContext from "../context/FilmContext";
import styles from '../components/Card.module.css'

const Card = (props) => {
  const { toggleFavoriteLocalStorage } = useContext(FilmContext);

  const isFavorite = (id) => {
    const isFavorite = localStorage.getItem(id)
    if (isFavorite) {
      return true
    }
    else {
      return false
    }
  }

  return (
      props.card.map(film => (
        <div className={styles.card} key={film.id}>
          <img src={film.image} alt={film.title}/>  
          <div className={styles.descriptions}>
            <h1>{film.title}</h1>
            <p>{film.description}</p>
            <button onClick={ () => toggleFavoriteLocalStorage(film.id)}> {isFavorite(film.id) ? '❌' : '❤' }</button>
          </div>
        </div>
      ))
  )
}

export default Card;