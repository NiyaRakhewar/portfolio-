import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Niharika Rakhewar </span>
            from <span className="purple"> Pune, Maharashtra, India.</span>
            <br /> I have completed my graduation in Computer Engineer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Baketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p
            style={{
              marginBlockEnd: 0,
              color: "rgb(155 126 172)",
              marginBottom: "15px",
            }}
          >
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer
            style={{ marginBottom: "10px" }}
            className="blockquote-footer"
          >
            Niharika
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
