import React from "react";
import { Link } from "react-router-dom";
import "./MovieList.css";

function MovieList() {
  const movies = [
    { id: 1, title: "NoteBook", img: "../assets/The-NoteBook.jpg", category: "drama" },
    { id: 2, title: "Película 2", img: "../assets/pelicula2.jpg", category: "accion" },
    { id: 3, title: "Película 3", img: "../assets/pelicula3.jpg", category: "comedia" },
    { id: 4, title: "Película 4", img: "../assets/pelicula4.jpg", category: "accion" },
    { id: 5, title: "Película 5", img: "../assets/pelicula5.jpg", category: "drama" },
    { id: 6, title: "Película 6", img: "../assets/pelicula6.jpg", category: "comedia" },
  ];

  return (
    <div className="movie-list">
      <h2>Cartelera</h2>
      <div className="grid-container">
        {movies.map((movie) => (
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

export default MovieList;