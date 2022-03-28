import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by Anil Maurya</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} </h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/anilmaurya61"
                style={{ color: "white" }}
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/anilmaurya61"
                style={{ color: "white" }}
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://m.facebook.com/100039111909902/"
                style={{ color: "white" }}
              >
                <AiFillFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/_anil_maurya/"
                style={{ color: "white" }}
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/Anilmaurya61"
                style={{ color: "white" }}
              >
                <AiOutlineTwitter />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
