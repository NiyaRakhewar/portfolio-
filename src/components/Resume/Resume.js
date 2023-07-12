import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Niharika_Rakhewar_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";
function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  console.log(spojRank, hackerrank, sem, cgpa);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row
          style={{ justifyContent: "center", position: "relative" }}
          data-aos="fade-up"
        >
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume" data-aos="fade-up">
          {/* <Col md={6} className="resume-left">
            <h3 className="resume-title">Training</h3>
            <Resumecontent
              title="SITE  ENGINEER [ Shesai Associates ]"
              date="June 2020"
              content={[
                "Worked on processing fieldwork for various projects which comprise layout marking, Structural checking, on-site work overview.",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="PAPER-PRESENTATION COMPETITION  [ BITS ATMOS-2019 ]"
              content={[
                "Created a paper Presentation on Next genration Sesimic Design and won third place at BITS ATMOS 2019 at Bits pilani ",
              ]}
            />
            <Resumecontent
              title="Inter-Collegiate 'C' zone Basketball Tournament"
              content={[
                "Won third place at Inter-Collegiate 'C' zone Basketball Tournament",
              ]}
            />
          </Col> */}
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title=" B.Tech COMPUTER ENGINEERING [ MGM'S COE, Nanded ] "
              date="2018 - 2022"
              content={["CGPA: 8.05 with A+ grade "]}
            />
            <Resumecontent
              title="12TH BOARD [ S. S. College,Nanded ]"
              date="2017 - 2018"
              content={["Percentage: 65%"]}
            />
            <Resumecontent
              title="10TH BOARD [ M. P. H. S.,Nanded ]"
              date="2015 - 2016"
              content={["Percentage: 71%"]}
            />
          </Col>
        </Row>
        <Row
          style={{ justifyContent: "center", position: "relative" }}
          data-aos="fade-right"
        >
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
