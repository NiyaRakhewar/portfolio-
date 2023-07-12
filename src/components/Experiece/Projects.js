import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/zono-icon.svg";
// import suicide from "../../Assets/Projects/suicide.png";
import Aos from "aos";
import "aos/dist/aos.css";

function Experience() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" data-aos="fade-right">
          <strong className="purple">Professional </strong>Experience
        </h1>
        <p style={{ color: "white" }} data-aos="fade-up">
          {/* Here are a few  I've worked on recently. */}
        </p>
        <Row
          data-aos="fade-down"
          style={{ justifyContent: "center", paddingBottom: "10px" }}
        >
          <ProjectCard
            imgPath={chatify}
            isBlog={false}
            title="Intern"
            description="DRDL (Defence Research and Development Laboratory) is an Indian missile development laboratory, part of the Defence Research and Development Organization. Their charter is centered on the design, development, and flight evaluation of various types of missile systems for the Indian armed forces."
            link=""
            linkmedium=""
            linklive=""
          />

          <Col md={5} className="project-card" data-aos="fade-right"></Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
