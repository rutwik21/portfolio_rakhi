import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            With a passion for both technology and creativity, 
            <br />
            I specialize in transforming your digital vision into reality. 
            <br />
            As a seasoned <i><b className="purple">Social Media Manager</b></i>, I create engaging strategies 
            <br />
            that boost your online presence and drive results. 
            <br />
            My expertise as a <i><b className="purple">Web Developer</b></i> ensures that your website is not 
            <br />
            only visually appealing but also highly functional and user-friendly.
            <br />
            <br />
            Combining these skills with a knack for innovative problem-solving, 
            <br />
            I provide tailored solutions that make your brand stand out in 
            <br />
            the crowded digital landscape. 
            <br />
            Let's collaborate to make your online presence unforgettable!

            {/* Hi Everyone, I am <i><b className="purple">Krushna Sharma </b></i>
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
            <i><b className="purple">Let’s connect</b></i> and achieve your goals together. */}
          </p>

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
