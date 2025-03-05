import React from "react";
import { useParams, Link } from "react-router-dom";
import "./MovieList.css";

function CategoryList() {
  const { categoryId } = useParams();
  const movies = [
    { id: 1, title: "Película 1", img: "../assets/The-NoteBook.jpg", category: "drama" },
    { id: 2, title: "Película 2", img: "/assets/pelicula2.jpg", category: "accion" },
    { id: 3, title: "Película 3", img: "/assets/pelicula3.jpg", category: "comedia" },
  ];

  const filteredMovies = movies.filter(movie => movie.category === categoryId);

  return (
    <div className="movie-list">
      <h2>Películas de {categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}</h2>
      <div className="grid-container">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.img} alt={movie.title} className="movie-image" />
            <h3>{movie.title}</h3>
            <Link to={`/movie/${movie.id}`} className="buy-button">Comprar Entradas</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;