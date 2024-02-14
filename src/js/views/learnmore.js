import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

// const [info, setInfo] = useState([]);

const LearnMore = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img
            src="https://www.reduam.es/images/portfolio/portfolio-1.jpg"
            className="img-fluid"
            alt="..."
          />
        </div>
        <div className="col-6">
          <h1>{props.title}</h1>
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
        {/* {info.map((item, index) => (
          <div className="col" key={index}>
            <h2>{item.info}</h2>
            <h4>{item.detailsInfo}</h4>
          </div>
        ))}
        ; */}
      </div>
    </div>
  );
};

export default LearnMore;
