import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import CardsPersonajes from "../component/cardsPersonajes";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/detallePersonajes.css";

export const DetallePersonajes = () => {
    const { store, actions } = useContext(Context);
    const params = useParams()
    console.log(params)
    const [personaje, setPersonaje] = useState({})
    const filtrar = async () => {
        const filtrado = await store.people.filter((elemento) => {

            return elemento.uid == params.uid

        })

        setPersonaje(filtrado[0])

    }
    useEffect(() => {
        filtrar()
    }, [])


    console.log(personaje)
    return (
        <div className="container">
            <div className="card-detalle mb-3" >
                <div className="row g-0 align-items-start">
                    <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`} className="card-img-top" alt={""} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title" style={{ fontSize: "3rem" }}>{personaje.properties?.name}</h5>
                            <p className="card-text" style={{ fontSize: "1.5rem" }}> Detail: {personaje.description}</p>
                            <div className="table-responsive">
                                <table className="table table-hover text-red">
                                    <thead>
                                        <tr className="card-text text-danger">
                                           
                                            <th scope="col">Birth Year</th>
                                            <th scope="col">Gender</th>
                                            <th scope="col">Height</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                           
                                            <td>{personaje.properties?.birth_year}</td>
                                            <td>{personaje.properties?.gender}</td>
                                            <td>{personaje.properties?.height}</td>
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
export default DetallePersonajes;
