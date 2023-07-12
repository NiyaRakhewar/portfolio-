import React from "react";
import Card from "react-bootstrap/Card";
import "./proj.css";
import { ImPointRight } from "react-icons/im";
function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <br />
      <Card.Title>
        {/* <a
          href={props.linklive}
          target="_blank"
          style={{ color: "whitesmoke", fontWeight: "bolder", fontSize: 22 }}
        >
          {props.title}
        </a> */}
      </Card.Title>
      <h5 data-aos="fade-right" style={{ fontWeight: "bolder", fontSize: 18 }}>
        <strong className="purple">Start Date : </strong> April 2022 - July 2022
      </h5>
      {/* <Card.Img
        src={props.imgPath}
        alt="card-img"
        style={{ height: "250px" }}
      /> */}
      <Card.Body>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        <Card.Text style={{ textAlign: "justify" }}>
          <h4 style={{ color: "#C770F0" }}>Areas of Responsibility</h4>
          <ul>
            <li
              className="about-activity"
              style={{ fontWeight: "bolder", fontSize: 18 }}
            >
              <ImPointRight /> Completed an internship at DRDL where I received
              hands-on training on data acquisition systems with a team of four
              members.
            </li>
            <li
              className="about-activity"
              style={{ color: "white", fontWeight: "bolder", fontSize: 18 }}
            >
              <ImPointRight />
              Worked extensively with the PXI module.
            </li>
            <li
              className="about-activity"
              style={{ color: "white", fontWeight: "bolder", fontSize: 18 }}
            >
              <ImPointRight /> Developed a graphical user interface (GUI) using
              Python (Tkinter) library to enhance the usability and
              functionality of the data acquisition system.
            </li>
          </ul>
        </Card.Text>

        {/* <Col md={12} className="home-about-social">
          <h1></h1>
          <p>
            Find<span className="purple"> More </span>below
          </p>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href={props.link}
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={props.linkmedium}
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillMediumCircle />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={props.linklive}
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <RiLiveLine />
              </a>
            </li>
          </ul>
        </Col> */}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
