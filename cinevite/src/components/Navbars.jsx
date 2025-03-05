
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Cartelera</Link></li>
        <li><Link to="/category/estrenos">Próximos Estrenos</Link></li>
        <li><Link to="/category/accion">Acción</Link></li>
        <li><Link to="/category/comedia">Comedia</Link></li>
        <li><Link to="/category/drama">Drama</Link></li>
        <li><a href="#">Mi Cuenta</a></li>
      </ul>
    </nav>
  );
}

export default NavBars;