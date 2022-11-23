import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FilmContext from './context/FilmContext'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import styles from './components/Card.module.css'


function App() {
  const [films, setFilms] = useState([]);
  const [favorites, setFavorites] = useState([]);
  
  useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then(res => res.json())
      .then(films => {
        setFilms(films)
      })
  }, [])

  const toggleFavorite = (film) => {
    const isFavorite = favorites.find(f => f.id === film.id)
    if (isFavorite) {
      setFavorites(favorites.filter(f => f.id !== film.id))
    } else {
      setFavorites([...favorites, film])
    }
  }

  const toggleFavoriteLocalStorage = (id) => {
    toggleFavorite(id)
    const isFavorite = localStorage.getItem(id)
    if (isFavorite) {
      localStorage.removeItem(id)
    }
    else {
      const film = films.find(film => film.id === id)
      localStorage.setItem(id, JSON.stringify(film))
    }
  }

  const context = {
    films,
    favorites,
    toggleFavoriteLocalStorage,
  };

  return (
    <div className={styles.bg_image}>
      <FilmContext.Provider value={ context }>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favorites' element={<Favorites />} />
          </Routes>
        </Router>
      </FilmContext.Provider>
    </div>
  )
}

export default App
