import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-scroll";
import RoundImg from "react-rounded-image";
import profilePhoto from "../assets/profile.PNG";

const Styles = styled.div`
  .navbar {
    font-family: "Open Sans";
  }

  .navbar-brand,
  .navbar-nav .nav-link {
    color: black;
    font-weight: 500;
  }
`;

export const NavigationBar = () => {
  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand>
          <RoundImg
            image={profilePhoto}
            imageWidth="55"
            imageHeight="55"
            roundedSize="0"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link>
                <Link
                  to="experience"
                  smooth={true}
                  offset={-10}
                  duration={500}
                  className="nav-link"
                >
                  Experience
                </Link>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link>
                <Link
                  to="skill"
                  smooth={true}
                  offset={-10}
                  duration={500}
                  className="nav-link"
                >
                  Skills
                </Link>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link>
                <Link
                  to="project"
                  smooth={true}
                  offset={-10}
                  duration={500}
                  className="nav-link"
                >
                  Projects
                </Link>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link>
                <Link
                  to="contact"
                  smooth={true}
                  offset={-10}
                  duration={500}
                  className="nav-link"
                >
                  Contact Me
                </Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};
