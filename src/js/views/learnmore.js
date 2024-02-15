import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const LearnMore = () => {
  const { type, uid } = useParams();
  const [info, setInfo] = useState(null);
  const { actions } = useContext(Context);

  const typeToFunctionMap = {
    characters: actions.getCharacters,
    planets: actions.getPlanets,
    vehicles: actions.getVehicles,
  };
  const typeToPropertiesMap = {
    characters: [
      "name",
      "birth_year",
      "gender",
      "height",
      "skin_color",
      "eye_color",
    ],
    planets: [
      "name",
      "climate",
      "population",
      "orbital_period",
      "rotation_period",
      "diameter",
    ],
    vehicles: [
      "name",
      "model",
      "vehicle_class",
      "passengers",
      "crew",
      "length" /* las propiedades de los vehículos que quieres mostrar */,
      ,
    ],
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await typeToFunctionMap[type]();
      const item = data.find((item) => item.uid === uid);
      setInfo(item);
    };

    fetchData();
  }, [type, uid]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img
            src={`https://starwars-visualguide.com/assets/img/${type}/${uid}.jpg`}
            className="img-fluid"
            alt="..."
          />
        </div>
        <div className="col-6">
          <h1>{info?.name}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <hr style={{ borderColor: "#0056b2" }} />
      <div className="row">
        {Object.entries(info || {})
          .filter(([key]) => typeToPropertiesMap[type].includes(key))
          .map(([key, value], index) => (
            <div className="col" key={index}>
              <h3>{key.replace("_", " ").toUpperCase()}</h3>
              <h4>{value}</h4>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LearnMore;
