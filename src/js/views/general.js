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
              name={character.name}
              type="characters"
              key={index}
              img={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
              title={character.name}
              uid={character.uid}
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
              type="planets"
              key={index}
              img={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
              title={planet.name}
              uid={planet.uid}
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
              type="vehicles"
              key={index}
              img={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
              title={vehicle.name}
              uid={vehicle.uid}
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
