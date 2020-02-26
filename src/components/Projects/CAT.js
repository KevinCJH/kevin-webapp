import React from "react";
import { Table } from "react-bootstrap";
import { ReactComponent as IconAng } from "../../assets/devicons/angularjs-plain.svg";
import { ReactComponent as IconTypeS } from "../../assets/devicons/typescript-plain.svg";
import { ReactComponent as IconT } from "../../assets/devicons/travis-plain.svg";
import { ReactComponent as IconGit } from "../../assets/devicons/git-plain.svg";
import { ReactComponent as IconHTML } from "../../assets/devicons/html5-plain.svg";
import { ReactComponent as IconCSS } from "../../assets/devicons/css3-plain.svg";
import { ReactComponent as IconEle } from "../../assets/devicons/electron-original.svg";
import { ReactComponent as IconJas } from "../../assets/devicons/jasmine-plain.svg";
import projImg from "../../assets/project/cat.png";
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

export const CAT = () => {
  return (
    <div>
      <h3>
        <TitleLink href={projImg} rel="noopener noreferrer" target="_blank">
          CATcher
        </TitleLink>
      </h3>
      <ul>
        <ProjInfo>
          Developed a desktop application for Crowd-sourced Anonymous Testing
        </ProjInfo>
        <ProjInfo>
          Application runs on Angular 7 and Electron 4 and uses Github octokit
          API for backend
        </ProjInfo>
        <ProjInfo>
          Wrote test cases using Jasmine and automated testing on Travis
        </ProjInfo>
      </ul>
      <br />
      <Table borderless responsive size="sm">
        <tbody>
          <tr>
            <td align="center">
              <IconTypeS width="60px" />
            </td>
            <td align="center">
              <IconHTML width="60px" />
            </td>
            <td align="center">
              <IconCSS width="60px" />
            </td>
            <td align="center">
              <IconAng width="60px" />
            </td>
            <td align="center">
              <IconEle width="60px" />
            </td>
            <td align="center">
              <IconJas width="60px" />
            </td>
            <td align="center">
              <IconGit width="60px" />
            </td>
            <td align="center">
              <IconT width="60px" />
            </td>
          </tr>
          <tr>
            <td align="center">Typescript</td>
            <td align="center">HTML5</td>
            <td align="center">CSS3</td>
            <td align="center">AngularJS</td>
            <td align="center">Electron</td>
            <td align="center">Jasmine</td>
            <td align="center">Git</td>
            <td align="center">Travis CI</td>
          </tr>
        </tbody>
      </Table>
      <hr></hr>
    </div>
  );
};
