import React from "react";
import Card from "react-bootstrap/Card";

function ServiceCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title className="fw-bold border-bottom border-dark pb-2">{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default ServiceCard;
