import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/cardsPersonajes.css";
import { Context } from "../store/appContext";

const CardsPlaneta = (props) => {
	console.log(props);
	const { store, actions } = useContext(Context);

	// Verificar si el personaje ya está en favoritos
	const isFavorite = store.favoritos.some(fav => fav === props.planeta?.properties.name);

	// Manejar el clic del botón de favoritos
	const handleFavoriteClick = () => {
		actions.añadirEliminarFavoritos(props.planeta.properties?.name); // Pasar el objeto completo del planeta
	};

	return (
		<div className="col-12 col-md-6 col-lg-3 mb-3 caja" >
			<div className="card h-100">
				<img src={`https://starwars-visualguide.com/assets/img/planets/${props.planeta.uid}.jpg`} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-Nombre">{props.planeta.properties.name}</h5>
					<div className="card-lista" style={{ width: "18rem" }}>
						<ul className="list-group list-group-flush text-start">
							<li className="list-group-item">Population: {props.planeta.properties.population}</li>
							<li className="list-group-item">Terrain: {props.planeta.properties.terrain}</li>
							{/* Añade otros detalles si es necesario */}
						</ul>
					</div>
				</div>
				{/* Botones de la carta */}
				<div className="card-footer text-center">
					<div className="row justify-content-center">
						<div className="col-auto">
							<Link to={`/planeta/${props.planeta?.uid}`} className="btn btn-primary" type="submit" style={{ marginRight: "100px" }}>
								Leer Más
							</Link>
						</div>
						<div className="col-auto">
							<button
								className="btn btn-outline-warning"
								onClick={handleFavoriteClick}
							>
								{/* Cambia el ícono dependiendo si está en favoritos o no */}
								{isFavorite ? <i className="fa-solid fa-heart" style={{ color: "red" }}></i> : <i className="fa-regular fa-heart"></i>}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardsPlaneta;