import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";

const NameLink = styled.a`
  color: #333;
  text-decoration: underline;

  &:hover {
    color: #999;
  }
`;

const Intro = styled.h1`
  font-family: 'Inconsolata';
  font-weight: bold;
`;

const Desc = styled.h5`
  font-family: 'Inconsolata';
  font-weight: bold;
`;

export const Jumbotron = () => {
  return (
      <Jumbo fluid className="jumbo">
        <Container>
          <Intro>
            Hi there! I'm
            {" "}
              <NameLink
                href="https://www.linkedin.com/in/kevinchinjh/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Kevin Chin
              </NameLink>.{" "}
          </Intro>
          <Desc>
            I'm a fresh graduate from the National University of Singapore
            (NUS) who is passionate about technology
          </Desc>
        </Container>
      </Jumbo>
  );
};
