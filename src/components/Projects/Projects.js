import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/E-commerce.png";
// import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/Food-app.png";
import chatify from "../../Assets/Projects/moshimoshi.png";
// import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/trip-advisor.png";
import Aos from "aos";
import "aos/dist/aos.css";
function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" data-aos="fade-right">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }} data-aos="fade-up">
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="MoshiMoshi "
              description="
              Introducing MoshiMoshi, a captivating social media app tailored for avid anime enthusiasts. Immerse yourself in a vibrant community, where Otakus can connect, share their passion, and embark on a thrilling journey through the colorful world of anime. Unleash your inner wordsmith as you explore an expansive collection of vibrant discussions, remarkable artwork, and engaging conversations."
              link="https://github.com/NiyaRakhewar/social_media_app"
              linklive="https://moshi-moshi.netlify.app/"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-up">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="TheFace"
              description="Introducing TheFace, a sophisticated e-commerce skincare web application showcasing a curated selection of indulgent and transformative products. Immerse yourself in a seamless interface that combines intuitive navigation, stunning visuals, and an expansive collection, elevating your skincare routine to new heights of luxury and efficacy."
              link="https://github.com/NiyaRakhewar/ecommerce_website"
              linklive="https://the-face-beauty.netlify.app/"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-down">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="FoodExpress"
              description="Introducing FoodExpress, the epitome of gastronomic bliss, where culinary delights from diverse cuisines converge. Savor an exquisite array of delectable dishes, meticulously curated to tantalize your taste buds, as you embark on a culinary journey like never before. With a seamless interface and swift delivery, indulge in a symphony of flavors at your fingertips."
              link="https://github.com/NiyaRakhewar/mcr-6"
              linklive="https://food-order-tomato.netlify.app/"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Trip Advisor"
              description="Discover the world with our Trip Advisor app, featuring enchanting destinations across continents. Immerse yourself in the captivating allure of Europe's historic landmarks, delve into Asia's cultural wonders, and embark on thrilling adventures in Africa's breathtaking landscapes. Uncover hidden gems, indulge in gastronomic delights, and create unforgettable memories at the world's most iconic and awe-inspiring locations."
              link="https://github.com/NiyaRakhewar/mcr7"
              linklive="https://trip-advisor-00.netlify.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
