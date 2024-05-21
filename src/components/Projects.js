import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Col"
import Col from "react-bootstrap/Row"
import Tab from "react-bootstrap/Tab"
import Nav from "react-bootstrap/Nav"
import { ProjectCard } from "./ProjectCard";
import colourSharp2 from "../assests/img/color-sharp2.png"
import projImg1 from "../assests/img/project-img1.png"
import projImg2 from "../assests/img/project-img2.png"
import projImg3 from "../assests/img/project-img3.png"

export const Projects = () => {
  const projects = [
    {
      title: "Student Sharing App",
      description:
        "A .NET Blazor server application built to enable students to share items and allow campus shops to donate food items that would have gone to waste. ",
      imgUrl: projImg1,
    },
    {
      title: "Cruise Management App",
      description:
        "A console application which enables users to manage a fleet of cruises . ",
      imgUrl: projImg2,
    },
    {
      title: "Documentary Genie",
      description:
        "A .NET Blazor server application which allows users to generate random documentaries at the click of a button",
      imgUrl: projImg3,
    },
    {
      title: "Student Supervision App",
      description:
        "A .Net Blazor server which enables students and their personal supervisors connect better. ",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p> write a description about your projects.</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="/home">
                <Nav.Item >
                  <Nav.Link eventKey="first">Projects</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Col md={2} sm={1} className="">
                    {projects.map((project, index) => {
                        return(
                            <ProjectCard key={index} {...project} />
                        )
                    })}
                  </Col>
                </Tab.Pane>
                <Tab.Pane eventKey="second"></Tab.Pane>
                <Tab.Pane eventKey="third"></Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        alt="background"
        src={colourSharp2}
      />
    </section>
  );
};
