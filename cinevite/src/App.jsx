import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbars from "./components/Navbars";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import CategoryList from "./components/CategoryList";
import NotFound from "./components/NotFound";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <h1 className="title">Bienvenido a CineVite 🎬</h1>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/category/:categoryId" element={<CategoryList />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;