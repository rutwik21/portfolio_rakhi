import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCard from "./ServiceCard";

function Services() {
    const SERVICES1 = [
        {title:"Social Media Mastery", description: "Unlock the full potential of your brand with our tailor-made social media strategies. We craft engaging content, run targeted campaigns, and analyze performance to keep your audience connected and growing."},
        {title:"Web Development Excellence", description: "From sleek, responsive designs to robust functionalities, we build websites that don’t just look great but work seamlessly. Whether you need a brand-new site or a revamp, we ensure it stands out and performs at its best."},
        {title:"Creative Digital Solutions", description: "Innovative ideas deserve innovative solutions. We offer creative digital strategies that blend design and functionality to solve your unique challenges and enhance your online presence."},
        
    ];
    const SERVICES2 = [
        {title:"Personalized Consultation", description: "Not sure where to start? Our personalized consultations will guide you through your digital journey. We listen to your goals, assess your needs, and provide actionable insights tailored just for you."},
        {title:"Results-Driven Strategies", description: "Our commitment is to deliver results that matter. We focus on metrics that align with your goals, ensuring every strategy is designed to drive growth and achieve your desired outcomes."},
        // {title:"Marketing support", description: "Email marketing campaigns, Social media marketing, Market research, Creating promotional materials"},
        // {title:"Technical support", description: "Website maintenance, Basic tech troubleshooting, Software updates, Managing online tools and platforms"},
        // {title:"Personal assistance", description: "Email management, Calendar management, Appointment scheduling, Data entry, Transcription, Travel arrangements"},
        // {title:"E-commerce support", description: "Managing product listings, Processing orders and returns, Inventory management, Customer service for e-commerce platform"},
        
    ];
    // const SERVICES3 = [
    //     {title:"Web development", description: "It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites."},
    //     {title:"Project management", description: "Creating timeline, Task tracking, Coordinating team members, Timeline and deadline management, Reporting on project progress"},
    //     {title:"Customer support", description: "Responding to customer inquiries, Managing customer feedback, Handling complaints and issues, Live chat support"},
    //     {title:"Bookkeeping", description: "Invoicing, Expense tracking, Basic financial reporting"},
    //     {title:"Event Planning", description: "Organizing virtual events, Coordinating event logistics, Managing RSVPs and follow-ups"},
        
    // ];
  return (
    <Container fluid className="about-section">
      <Container>
        <h1 >What We <span className="purple fw-bold">Offer</span>?</h1>
        <p className="fw-bold">Transforming Ideas Into Digital Success</p>
        <p className="border-bottom border-dark p-2 bg-white bg-opacity-25">At Krushna Sharma’s digital studio, we’re dedicated to turning your vision into reality with a blend of creativity and technical expertise. Here’s what we bring to the table:</p>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col md={6} style={{ justifyContent: "center"}}>
                {SERVICES1.map((ele,i)=>{
                    return <div style={{maxWidth:"auto", height:"auto", padding:"10px"}}>
                        <ServiceCard title={ele.title} description={ele.description} />
                    </div>
                })}
            </Col>
             <Col md={6} style={{ justifyContent: "center"}}>
                {SERVICES2.map((ele,i)=>{
                    return <div style={{maxWidth:"auto", height:"auto", padding:"10px"}}>
                        <ServiceCard title={ele.title} description={ele.description} />
                    </div>
                })}
            </Col>
            {/*<Col md={4} style={{ justifyContent: "center"}}>
                {SERVICES3.map((ele,i)=>{
                    return <div style={{maxWidth:"auto", height:"auto", padding:"10px"}}>
                        <ServiceCard title={ele.title} description={ele.description} />
                    </div>
                })}
            </Col> */}
            
        </Row>
      </Container>
    </Container>
  );
}

export default Services;
