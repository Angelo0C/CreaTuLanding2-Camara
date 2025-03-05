import React from "react";
import { Link } from "react-router-dom";
import "./MovieList.css";



function MovieList() {
  const movies = [
    { id: 1, title: "NoteBook", img: "../assets/The-NoteBook.jpg", category: "drama" },
    { id: 2, title: "Dune 2", img: "../assets/Dune-2.jpg", category: "accion" },
    { id: 3, title: "Flow", img: "../assets/Flow.jpg", category: "comedia" },
    { id: 4, title: "Her", img: "../assets/Her.jpg", category: "drama" },
    { id: 5, title: "The Brutalist", img: "../assets/The_Brutalist.jpg", category: "drama" },
    { id: 6, title: "The Monkey", img: "../assets/The_Monkey.jpg", category: "comedia" },
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