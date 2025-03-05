import React from "react";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const { id } = useParams();
  return (
    <div>
      <h2>Detalle de la Película {id}</h2>
      <p>Aquí se mostrará la información detallada de la película seleccionada.</p>
    </div>
  );
}

export default MovieDetail;