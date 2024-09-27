import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/cardsPersonajes.css";
import { Context } from "../store/appContext";

const CardsPersonajes = (props) => {
	const { store, actions } = useContext(Context);

	// Verificar si el personaje ya está en favoritos
	const isFavorite = store.favoritos.some(fav => fav === props.personaje?.properties.name);

	// Manejar el clic del botón de favoritos
	const handleFavoriteClick = () => {
		actions.añadirEliminarFavoritos(props.personaje?.properties.name); // Pasar el objeto completo del personaje
	};

	return (
		<div className="col-12 col-md-6 col-lg-3 mb-3 caja"> 
			<div className="card h-100">
				<img src={`https://starwars-visualguide.com/assets/img/characters/${props.personaje?.uid}.jpg`} className="card-img-top" alt={props.personaje?.properties.name} />
				<div className="card-body">
					<h5 className="card-Nombre">{props.personaje?.properties.name}</h5>
					<div className="card-lista" style={{ width: "18rem" }}>
						<ul className="list-group list-group-flush text-start">
							<li className="list-group-item">Género: {props.personaje?.properties.gender}</li>
							<li className="list-group-item">Color de Cabello: {props.personaje?.properties.hair_color}</li>
							<li className="list-group-item">Color de Ojo: {props.personaje?.properties.eye_color}</li>
						</ul>
					</div>
				</div>

				{/* Botones de la carta */}
				<div className="card-footer text-center">
					<div className="row justify-content-center">
						<div className="col-auto">
							<Link to={`/personaje/${props.personaje?.uid}`} className="btn btn-primary" type="submit" style={{ marginRight: "100px" }}>
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

export default CardsPersonajes;
