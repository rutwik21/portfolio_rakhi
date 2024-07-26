import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import video1 from "../../Assets/Projects/1.MP4";
import video2 from "../../Assets/Projects/2.MP4";
import video3 from "../../Assets/Projects/3.MP4";
import video4 from "../../Assets/Projects/4.MP4";
import video5 from "../../Assets/Projects/5.mp4";
import video6 from "../../Assets/Projects/6.MP4";

function Projects() {
  return (
    <Container fluid className="mt-5 pt-5">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are a few projects I've worked on recently.
        </p>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <video src={video1} type="video/mp4" autoPlay loop muted className="w-100 h-100 object-cover" controls>
                Your browser does not support the video tag.
              </video>
            </Card>
          </Col>

          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <video src={video2} type="video/mp4" autoPlay loop muted className="w-100 h-100 object-cover" controls>
                Your browser does not support the video tag.
              </video>
            </Card>
          </Col>

          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <video src={video3} type="video/mp4" autoPlay loop muted className="w-100 h-100 object-cover" controls>
                Your browser does not support the video tag.
              </video>
            </Card>
          </Col>

          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <video src={video4} type="video/mp4" autoPlay loop muted className="w-100 h-100 object-cover" controls>
                Your browser does not support the video tag.
              </video>
            </Card>
          </Col>

          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <video src={video5} type="video/mp4" autoPlay loop muted className="w-100 h-100 object-cover" controls>
                Your browser does not support the video tag.
              </video>
            </Card>
          </Col>

          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <video src={video6} type="video/mp4" autoPlay loop muted className="w-100 h-100 object-cover" controls>
                Your browser does not support the video tag.
              </video>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
