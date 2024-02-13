import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Cards from "../component/card";

const General = () => {
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getCharacters().then(setCharacters);
    actions.getPlanets().then(setPlanets);
    actions.getVehicles().then(setVehicles);
  }, []);

  const handleFavoriteClick = (name) => {
    actions.addFavorite(name);
  };

  return (
    <div className="container">
      <div className="row">
        <h2 className="text-danger bungee-shade-regular ">Characters</h2>

        <div className="scrollable-div ">
          {characters.map((character, index) => (
            <Cards
              key={index}
              title={character.name}
              text={
                <>
                  Gender: {character.gender}
                  <br />
                  Hair Color: {character.hair_color}
                  <br />
                  Eye Color: {character.eye_color}
                </>
              }
              favoriteButton={() => handleFavoriteClick(character.name)}
            />
          ))}
        </div>
      </div>
      <div className="row">
        <h2 className="text-danger">Planets</h2>

        <div className="scrollable-div ">
          {planets.map((planet, index) => (
            <Cards
              key={index}
              title={planet.name}
              text={
                <>
                  Population: {planet.population}
                  <br />
                  Terrain: {planet.terrain}
                </>
              }
              favoriteButton={() => handleFavoriteClick(planet.name)}
            />
          ))}
        </div>
      </div>
      <div className="row">
        <h2 className="text-danger">Vehicles</h2>

        <div className="scrollable-div ">
          {vehicles.map((vehicle, index) => (
            <Cards
              key={index}
              title={vehicle.name}
              text={
                <>
                  Model: {vehicle.model}
                  <br />
                  Cost in credits: {vehicle.cost_in_credits}
                </>
              }
              favoriteButton={() => handleFavoriteClick(vehicle.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default General;
