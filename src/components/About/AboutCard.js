import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anil Maurya </span>
            from <span className="purple"> Lucknow, India.</span>
            <br />I am currently 3rd year B.Tech student of Computer Science & Engineering
            at NIET, Gr.Noida.<br /> I'm an{" "}
            <b className="purple">Enthusiastic, Self-Motivated, Web developer</b> and
            <b className="purple"> Competative Programmer!</b>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Swimming🏊
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton🏸
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
