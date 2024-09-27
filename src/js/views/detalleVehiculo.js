import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import CardsVehiculo from "../component/cardsVehiculo";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/detallesVehiculo.css";

export const DetalleVehiculo = () => {
	const { store, actions } = useContext(Context);
	const params = useParams()
    console.log(params)
    const [vehiculo, setVehiculo] = useState({})
    const filtrar = async () => {
        const filtrado = await store.vehicles.filter((elemento) => {

            return elemento.uid == params.uid

        })

        setVehiculo(filtrado[0])

    }
    useEffect(() => {
        filtrar()
    }, [])


    console.log(vehiculo)
    return (
        <div className="container">
            <div className="card-detalle mb-3" >
                <div className="row g-0 align-items-start">
                    <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.uid}.jpg`} className="card-img-top" alt={""} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title" style={{ fontSize: "3rem" }}>{vehiculo.properties?.name}</h5>
                            <p className="card-text" style={{ fontSize: "1.5rem" }}> Detail: {vehiculo.description} </p>
                            <div className="table-responsive">
                                <table className="table table-hover text-red">
                                    <thead>
                                        <tr className="card-text text-danger">
                                           
                                           
                                            <th scope="col">Manufacture</th>
                                            <th scope="col">Cargo Capacity</th>
                                            <th scope="col">Model</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                           
                                            
                                            <td>{vehiculo.properties?.manufacturer}</td>
                                            <td>{vehiculo.properties?.cargo_capacity}</td>
                                            <td>{vehiculo.properties?.model}</td>
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
export default DetalleVehiculo;