import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import starWarsImage from "../../img/Starwars.png";
import "../../styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../store/appContext";

export const Navbar = (props) => {
  const { store, actions } = useContext(Context);
  const handleRemoveClick = (favorite) => {
    actions.removeFavorite(favorite);
  };

  return (
    <div class="container">
      <nav className="navbar navbar-light bg-light mb-3 px-5">
        <Link to="/">
          <img src={starWarsImage} alt="Star Wars" className="navbar-image" />
        </Link>
        <div className="ml-auto dropdown">
          <button
            class="btn btn-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites {store.favorites.length > 0 ? store.favorites.length : ""}
          </button>
          <ul class="dropdown-menu">
            {store.favorites.map((favorite, index) => (
              <li key={index} className="d-flex">
                <a class="dropdown-item" href="#">
                  {favorite}
                </a>
                <button
                  onClick={() => handleRemoveClick(favorite)}
                  className="btn"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
