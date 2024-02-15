import React, { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

function Cards(props) {
  const { actions } = useContext(Context);

  const handleFavoriteClick = () => {
    actions.addFavorite(props.title);
  };
  return (
    <Card style={{ width: "18rem" }} className="m-1">
      <Card.Img
        variant="top"
        src={
          props.img ||
          "https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/4/4b/Tatooine-3.jpg"
        }
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/4/4b/Tatooine-3.jpg";
        }}
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
            onClick={() =>
              props.favoriteButton({
                name: props.name,
                entityType: props.type,
                uid: props.uid,
              })
            }
          >
            <FontAwesomeIcon icon={faHeart} />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Cards;
