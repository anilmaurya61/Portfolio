import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import tourwithanil from "../../Assets/Projects/tourwithanil.jpg";
import bubblegame from "../../Assets/Projects/bubblegame.jpg";
import foodplaza from "../../Assets/Projects/foodplaza.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tourwithanil}
              title="Tour with Anil"
              description="A website for tourists where they can book there rooms in various hotels (Front end)."
              link="https://anilmaurya61.github.io/TOUR-WITH-ANIL/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodplaza}
              title="Food Recipe Plaza 🍔"
              description="A culinary recipes app that organises your favourite recipes by categories, regions, and dish name. Made with React."
              link="https://reactrecipe-search-app-reactjs.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bubblegame}
              title="Bubble Fish Game"
              description="Move around the fish to eat bubble. Tap anywhere on the screen to swim up and down. Collect bubbles for more score.Avoid other fishes"
              link="https://anilmaurya61.github.io/Bubble-Game/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
