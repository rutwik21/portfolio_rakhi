import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import main from "../../Assets/main.png";
import Home2 from "./Home2";
import Type from "./Type";
import Services from "../Services/Services";
import Projects from "../Projects/Projects";
import Pricing from "../Pricing/Pricing";
import Contact from "../Contact/Contact";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15}} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> KRUSHNA SHARMA</strong>
              </h1>

              <div style={{ padding: 45, paddingTop:5, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={main}
                alt="home pic"
                className="img-fluid h-full w-full"
                style={{  marginTop: "-50px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <Services />
      <Projects />
      <Pricing />
      <Contact id="contact"/>
    </section>
  );
}

export default Home;
