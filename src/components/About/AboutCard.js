import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <i><b className="purple">Krushna Sharma </b></i>
            a versatile <i><b className="purple">Virtual Assistant</b></i>
            <br />
            ready to elevate your business. I specialize in transforming chaos into clarity, 
            <br />
            Whether you need a reliable hand for administrative tasks, 
            <br />
            a creative mind for <i><b className="purple">social media management</b></i>, 
            <br />
            or a proactive approach to customer service, 
            <br />
            I'm here to support your every need. 

            <br />
            <br />
            My mission is to give you back your time so you can focus on what truly matters. 
            <br />
            With my comprehensive skills and commitment to excellence, 
            <br />
            I’m not just an assistant – I’m your partner in success. 
            <br />
            Ready to streamline your operations and take your business to new heights? 
            <br />
            <i><b className="purple">Let’s connect</b></i> and achieve your goals together.
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Krushna</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
