import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import CardsPlaneta from "../component/cardsPlaneta";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/detallePlanetas.css";

export const DetallePlanetas = () => {
	const { store, actions } = useContext(Context);
	const params = useParams()
	console.log(params)
	const [planeta, setPlaneta] = useState({})
	const filtrar = async () => {
		const filtrado = await store.planets.filter((elemento) => {

			return elemento.uid == params.uid
		})

		setPlaneta(filtrado[0])
	}
	useEffect(() => {
		filtrar()
	}, [])

	console.log(planeta)

	return (
		<div className="container">
			<div className="card-detalle mb-3" >
				<div className="row g-0 align-items-start">
					<div className="col-md-4">
						<img src={`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`} className="card-img-top" alt={""} />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title" style={{ fontSize: "3rem" }}>{planeta.properties?.name}</h5>
							<p className="card-text" style={{ fontSize: "1.5rem" }}> Detail: {planeta.description}</p>
							<div className="table-responsive">
								<table className="table table-hover text-red">
									<thead>
										<tr className="card-text text-danger">

											<th scope="col">Created</th>
											<th scope="col">Diameter</th>
											<th scope="col">Gravity</th>
											<th scope="col">Climate</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>{planeta.properties?.created}</td>
											<td>{planeta.properties?.diameter}</td>
											<td>{planeta.properties?.gravity}</td>
											<td>{planeta.properties?.climate}</td>
										</tr>

									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>

			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};

export default DetallePlanetas;