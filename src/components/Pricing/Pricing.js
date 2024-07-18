import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PricingCard from "./PricingCard";

function Pricing() {
    const PACKAGES = [
        {title:"Basic", description: ["Email management", "Calendar management", "Content creation", "Scheduling posts"], price: 799},
        {title:"Standard", description: ["Email management", "Calendar management", "Content creation", "Scheduling posts", "Data entry", "Engagement with followers"], price: 999},
        {title:"Premium", description: ["All from the Standard", "Social media strategy", "Analytics and reporting", "Handling customer inquiries"], price: 1299}
    ]
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
            <strong className="purple">Social Media Management </strong> Packages
        </h1>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
           <PricingCard title={PACKAGES[0].title} description={PACKAGES[0].description} price={PACKAGES[0].price}></PricingCard>
          </Col>
          <Col md={4} className="project-card">
           <PricingCard title={PACKAGES[1].title} description={PACKAGES[1].description} price={PACKAGES[1].price}></PricingCard>
          </Col>
          <Col md={4} className="project-card">
           <PricingCard title={PACKAGES[2].title} description={PACKAGES[2].description} price={PACKAGES[2].price}></PricingCard>
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Pricing;
