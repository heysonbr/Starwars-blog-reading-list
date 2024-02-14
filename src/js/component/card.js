import React, { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

function Cards(props) {
  const { actions } = useContext(Context);

  const handleFavoriteClick = () => {
    actions.addFavorite(props.title);
  };
  return (
    <Card style={{ width: "18rem" }} className="m-1">
      <Card.Img
        variant="top"
        src={props.img || "https://www.servithermic.cl/images/400X200.gif"}
      />
      <Card.Body>
        <Card.Title>{props.title || "Card Title"}</Card.Title>
        <Card.Text>
          {props.text ||
            "Some quick example text to build on the card title and make up the bulk of the card's content."}
        </Card.Text>
        <div className="d-flex ">
          <Link to={`/learnmore/${props.type}/${props.uid}`}>
            <Button variant="primary me-5">Learn more!</Button>
          </Link>
          <Button
            variant="btn btn-outline-warning ms-4"
            onClick={props.favoriteButton}
          >
            <FontAwesomeIcon icon={faHeart} />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Cards;
