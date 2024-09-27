import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo-Start-War.png";
import "../../styles/navbar.css";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <div>
            <nav className="navbar navbar-light navbar-dark mb-3 fixed-top">
                <Link to="/">
                    <img
                        src={logo}
                        alt="Star Wars Logo"
                        className="navbar-logo"
                    />
                </Link>
                <div className="ml-auto">
                    <div className="dropdown">
                        <button
                            className="btn btn-outline-warning dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Favoritos ({store.favoritos.length})
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                            {store.favoritos.length === 0 ? (
                                <li className="dropdown-item">No tienes favoritos</li>
                            ) : (
                                store.favoritos.map((favorito, index) => {
                                    return (
                                        <li className="dropdown-item d-flex justify-content-between align-items-center" key={index}>

                                            <span>{favorito}</span>


                                            {/* Ícono de eliminación */}
                                            <i
                                                className="fa-solid fa-trash ms-2"
                                                onClick={(e) => {
                                                    e.preventDefault(); // Evita que el link se active
                                                    e.stopPropagation(); // Evita que otros eventos se disparen
                                                    actions.añadirFavoritos(favorito);
                                                }}
                                                style={{ cursor: "pointer", color: "red" }}
                                            ></i>
                                        </li>
                                    );
                                })
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};
