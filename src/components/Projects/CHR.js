import React from "react";
import { Table } from "react-bootstrap";
import { ReactComponent as IconJava } from "../../assets/devicons/java-plain.svg";
import { ReactComponent as IconT } from "../../assets/devicons/travis-plain.svg";
import { ReactComponent as IconGit } from "../../assets/devicons/git-plain.svg";
import projImg from "../../assets/project/chr.png";
import styled from "styled-components";

const ProjInfo = styled.li`
  padding: 10px;
`;

const TitleLink = styled.a`
  color: #333;
  text-decoration: underline;

  &:hover {
    color: #999;
  }
`;

export const CHR = () => {
  return (
    <div>
      <h3>
        <TitleLink href={projImg} rel="noopener noreferrer" target="_blank">
          Contact HeRo
        </TitleLink>
      </h3>
      <ul>
        <ProjInfo>
          Developed Human Resource contact management desktop application using
          Java on{" "}
          <TitleLink
            href="https://www.jetbrains.com/idea/"
            rel="noopener noreferrer"
            target="_blank"
          >
            IntelliJ IDE
          </TitleLink>
        </ProjInfo>
        <ProjInfo>
          Automated testing and deployment using the Continuous Integration tool
          Travis
        </ProjInfo>
        <ProjInfo>
          Wrote test cases for Unit Test , Integration Test , System Test and
          Usability Test
        </ProjInfo>
        <ProjInfo>
          Drafted software documentation, including UML diagrams and developer guide
        </ProjInfo>
      </ul>
      <br />
      <Table borderless responsive size="sm">
        <tbody>
          <tr>
            <td align="center">
              <IconJava width="60px" />
            </td>
            <td align="center">
              <IconGit width="60px" />
            </td>
            <td align="center">
              <IconT width="60px" />
            </td>
          </tr>
          <tr>
            <td align="center">Java</td>
            <td align="center">Git</td>
            <td align="center">Travis CI</td>
          </tr>
        </tbody>
      </Table>
      <hr></hr>
    </div>
  );
};
