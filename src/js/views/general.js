import React from "react";
import "../../styles/home.css";
import Cards from "../component/card";


const General = () => {
  return (
    <div className="container">
      <div className="row">
        <h2 className="text-danger bungee-shade-regular ">Characters</h2>

        <div className="scrollable-div ">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
      <div className="row">
        <h2 className="text-danger">Planets</h2>

        <div className="scrollable-div ">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
      <div className="row">
        <h2 className="text-danger">Vehicles</h2>

        <div className="scrollable-div ">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default General;
