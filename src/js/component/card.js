import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Cards(props) {
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
          <Button variant="primary me-5">Go somewhere</Button>
          <Button variant="btn btn-outline-warning ms-4">
            <FontAwesomeIcon icon={faHeart} />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Cards;
