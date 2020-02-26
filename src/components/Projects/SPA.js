import React from "react";
import { Table } from "react-bootstrap";
import { ReactComponent as IconCPP } from "../../assets/devicons/cplusplus-plain.svg";
import { ReactComponent as IconT } from "../../assets/devicons/travis-plain.svg";
import { ReactComponent as IconGit } from "../../assets/devicons/git-plain.svg";
import projImg from "../../assets/project/spa.PNG";
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

export const SPA = () => {
  return (
    <div>
      <h3>
        <TitleLink href={projImg} rel="noopener noreferrer" target="_blank">
          Static Program Analyser
        </TitleLink>
      </h3>
      <ul>
        <ProjInfo>
          Developed a Static Program Analyser (SPA) to analyse the SIMPLE
          program
        </ProjInfo>
        <ProjInfo>
          SPA runs on C++, developed on Microsoft Visual Studio
        </ProjInfo>
        <ProjInfo>
          Wrote test cases for Unit Test , Integration Test and System Test
        </ProjInfo>
        <ProjInfo>
          Drafted developer documentation, including UML diagrams
        </ProjInfo>
      </ul>
      <br />
      <Table borderless responsive size="sm">
        <tbody>
          <tr>
            <td align="center">
              <IconCPP width="60px" />
            </td>
            <td align="center">
              <IconGit width="60px" />
            </td>
            <td align="center">
              <IconT width="60px" />
            </td>
          </tr>
          <tr>
            <td align="center">C++</td>
            <td align="center">Git</td>
            <td align="center">Travis CI</td>
          </tr>
        </tbody>
      </Table>
      <hr></hr>
    </div>
  );
};
