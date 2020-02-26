import React from "react";
import { AboutMe } from "./Home/AboutMe";
import { Experience } from "./Home/Experience";
import { Skills } from "./Home/Skills";
import { Project } from "./Home/Project";
import { Contact } from "./Home/Contact";
import styled from "styled-components";

const Styles = styled.p`
font-family: 'Open Sans';
`;

export const Home = () => {
  return (
    <Styles>
    <div>
      <h2> About Me </h2>
      <AboutMe />
      <br />
      <br />
      <h2 id="experience"> Experience and Education </h2>
      <Experience />
      <h2 id="skill"> Computing skills and knowledge </h2>
      <br />
      <Skills />
      <br />
      <br />
      <h2 id="project"> Projects </h2>
      <br />
      <Project />
      <br />
      <br />
      <h2 id="contact"> Let's get in touch </h2>
      <Contact />
      <br />
      <br />
    </div>
    </Styles>
  );
};
