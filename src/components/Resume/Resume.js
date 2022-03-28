import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import ResumePdf from "../../Assets/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={ResumePdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Resume
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            {/* <h3 className="resume-title">Experience</h3> */}
            {/* <Resumecontent
              title="Team Leader of BookXchanger Project"
              date="January 2021 - May 2021"
              content={[
                "Manages all the major task like collecting the resources and ideas to the documentation part of the Project. And worked with team members to improve the features of website.",
                "Worked on different features of website and mostly the frontend part of BookXchanger website.",
              ]}
            /> */}
            <h3 className="resume-title">Projects</h3>
            <Resumecontent
              title="Excel Clone"
              content={[
                "Build an excel clone where user can build, edit, upload, delete and make several sheets with various features like color change, changing values using functions and many more",
                "Technologies used :- HTML5 ,CSS3,JavaScript",
              ]}
            />
            <Resumecontent
              title="Open Board"
              content={[
                " This is a real-time drawing application similar where users can draw, erase, color, re-write and update files at a same  time with his/her friends at different locations",
                "Technologies used :- HTML5 ,CSS3,JavaScript,Canvas"
              ]}
            />
            <Resumecontent
              title="Tree Visualizer"
              content={[
                "Tree Visualizer is  web-based tool for creating and customizing rooted binary trees, as well as visualizing common tree traversal algorithms",
                "Technologies used :- HTML5 ,CSS3,ReactJs"
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="B.Tech in Computer Science and Engineering [NIET, Gr.Noida ] "
              date="2019 - Present"
              content={[`CGPA: 9.05 (Till 5th Sem)`]}
            />
            <Resumecontent
              title="12th BOARD [ C.B.G. Inter College of Science ,Hardoi]"
              date="2017"
              content={["Precentage: 82.6%"]}
            />
            <Resumecontent
              title="10th BOARD [ C.B.G. Inter College of Science ,Hardoi] "
              date="2015"
              content={["Precentage: 84.83%"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                "Become Campus Ambassador at Amazon Web services at first year of college",
                "Become CP Lead At First CodeChef NIET Chapter",
                "Build An Android App For MadmonkeyDeals.com With at Integrated Payment Service",
                "Solved more than 500 questions at various Online Coding Plateforms",
                "Highest rating of 1804 (4 stars) on CodeChef",
                "Solved more than 250 questions on Leetcode",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={ResumePdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Resume
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
