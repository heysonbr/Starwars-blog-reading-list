import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import StarWarsLogo from "../../img/StarWarsLogo.png";

import "../../styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../store/appContext";

export const Navbar = (props) => {
  const { store, actions } = useContext(Context);
  const handleRemoveClick = (favorite) => {
    actions.removeFavorite(favorite);
  };
  // actions.addFavorite({
  //   name: character.name, // o planet.name, o vehicle.name
  //   entityType: "character", // o 'planet', o 'vehicle'
  //   uid: character.uid, // o planet.uid, o vehicle.uid
  // });

  return (
    <div class="container">
      <nav className="navbar navbar-light bg-light mb-3 px-5">
        <Link to="/">
          <img src={StarWarsLogo} alt="Star Wars" className="navbar-image" />
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
                <Link to={`/learnmore/${favorite.entityType}s/${favorite.uid}`}>
                  <a class="dropdown-item" href="#">
                    {favorite.name}
                  </a>
                </Link>
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
