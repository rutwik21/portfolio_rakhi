import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {/* <li className="social-icons">
              <a
                href="https://github.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li> 
            <li className="social-icons">
              <a
                href="https://www.facebook.com/profile.php?id=100014968112059"
                style={{ color: "black" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </li>*/}
            <li className="social-icons">
              <a
                href="mailto:krushnasharma05@gmail.com"
                style={{ color: "black" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiGmail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/krushnasharma05"
                style={{ color: "black" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/krushnasharmaofficial"
                style={{ color: "black" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
