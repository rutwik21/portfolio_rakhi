import React from "react";
import Card from "react-bootstrap/Card";

function PricingCard({title, description, price}) {
  return (
    <Card className="project-card-view p-4">
        <Card.Title className="pb-2 w-100 border-bottom border-dark">
            <h4 className="fw-bold">{title}</h4>
        </Card.Title>
      <Card.Body className=" align-top">
        <ul className="">
            {description.map(e=>{
                return <li>{e}</li>
            })}
        </ul>
      </Card.Body>
      <Card.Footer className="bg-transparent border-0">
        <h4 className="fw-bold">${price}/month</h4> 
      </Card.Footer>
    </Card>
  );
}

export default PricingCard;
