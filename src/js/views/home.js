import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CardsPersonajes from "../component/cardsPersonajes";
import { Context } from "../store/appContext";
import CardsPlaneta from "../component/cardsPlaneta";
import CardsVehiculo from "../component/cardsVehiculo";


export const Home = () => {
	const { store, actions } = useContext(Context)
	console.log(store.planets) 

	return (
		<div className="text-center mt-5 container-fluid main-content">
			<h1>PERSONAJES</h1>
			<div className="container">
				<div className="justify-content-between row mb-5">
					{
						store.people.map((personaje) => {
							return (<CardsPersonajes
								key={personaje.uid}
								personaje={personaje} 

							/>)
						})
					}


				</div>
			</div>

			<h1>PLANETAS</h1>
			<div className="container">
				<div className="justify-content-between row mb-5">
					{
						store.planets.map((planeta)=>{
							return (
								<CardsPlaneta
								key={planeta.uid}
								planeta={planeta}
								
								/>
							)
						})
					}


				</div>
			</div>

			<h1>VEHICULO</h1>
			<div className="container">
				<div className="justify-content-between row mb-5">
				{
						store.vehicles.map((vehiculo)=>{
							return (
								<CardsVehiculo
								key={vehiculo.uid}
								vehiculo={vehiculo}
								
								/>
							)
						})
					}


				</div>
			</div>



		</div>
	)
}
