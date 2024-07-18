import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCard from "./ServiceCard";

function About() {
    const SERVICES1 = [
        {title:"Administrative support", description: "Email management, Calendar management, Appointment scheduling, Data entry, Transcription, Travel arrangements"},
        {title:"Social media management", description: "Content creation, Scheduling posts, Engaging with followers, Analytics and reporting, Running ad campaigns, Instagram, YouTube, Facebook, LinkedIn management, Social media strategy consultation, Social media audit consultation"},
        {title:"Content creation", description: "Blog writing, Copywriting, Graphic Design, Video editing, Reels editing "},
        {title:"Research and Analysis", description: "Conducting online reports, Compiling data reports, Analyzing industry trends"},
        
    ];
    const SERVICES2 = [
        {title:"Marketing support", description: "Email marketing campaigns, Social media marketing, Market research, Creating promotional materials"},
        {title:"Technical support", description: "Website maintenance, Basic tech troubleshooting, Software updates, Managing online tools and platforms"},
        {title:"Personal assistance", description: "Email management, Calendar management, Appointment scheduling, Data entry, Transcription, Travel arrangements"},
        {title:"E-commerce support", description: "Managing product listings, Processing orders and returns, Inventory management, Customer service for e-commerce platform"},
        
    ];
    const SERVICES3 = [
        {title:"Web development", description: "It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites."},
        {title:"Project management", description: "Creating timeline, Task tracking, Coordinating team members, Timeline and deadline management, Reporting on project progress"},
        {title:"Customer support", description: "Responding to customer inquiries, Managing customer feedback, Handling complaints and issues, Live chat support"},
        {title:"Bookkeeping", description: "Invoicing, Expense tracking, Basic financial reporting"},
        {title:"Event Planning", description: "Organizing virtual events, Coordinating event logistics, Managing RSVPs and follow-ups"},
        
    ];
  return (
    <Container fluid className="about-section">
      <Container>
        <h1 >What we <span className="purple fw-bold">offer</span>?</h1>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col md={4} style={{ justifyContent: "center"}}>
                {SERVICES1.map((ele,i)=>{
                    return <div style={{maxWidth:"auto", height:"auto", padding:"10px"}}>
                        <ServiceCard title={ele.title} description={ele.description} />
                    </div>
                })}
            </Col>
            <Col md={4} style={{ justifyContent: "center"}}>
                {SERVICES2.map((ele,i)=>{
                    return <div style={{maxWidth:"auto", height:"auto", padding:"10px"}}>
                        <ServiceCard title={ele.title} description={ele.description} />
                    </div>
                })}
            </Col>
            <Col md={4} style={{ justifyContent: "center"}}>
                {SERVICES3.map((ele,i)=>{
                    return <div style={{maxWidth:"auto", height:"auto", padding:"10px"}}>
                        <ServiceCard title={ele.title} description={ele.description} />
                    </div>
                })}
            </Col>
            
        </Row>
      </Container>
    </Container>
  );
}

export default About;
