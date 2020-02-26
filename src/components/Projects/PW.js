import React from "react";
import { Table } from "react-bootstrap";
import { ReactComponent as IconReact } from "../../assets/devicons/react-original.svg";
import { ReactComponent as IconJavaS } from "../../assets/devicons/javascript-plain.svg";
import { ReactComponent as IconGit } from "../../assets/devicons/git-plain.svg";
import { ReactComponent as IconHTML } from "../../assets/devicons/html5-plain.svg";
import { ReactComponent as IconCSS } from "../../assets/devicons/css3-plain.svg";
import { ReactComponent as IconBoot } from "../../assets/devicons/bootstrap-plain.svg";
import styled from "styled-components";

const ProjInfo = styled.li`
padding:10px;
`;

const ExLink = styled.a`
  color: #333;
  text-decoration: underline;

  &:hover {
    color: #999;
  }
`;

export const PW = () => {
  return (
    <div>
      <h3> Personal Website (This one!) </h3>
      <ul>
        <ProjInfo>
          Developed a simple personal website to showcase some of my past
          projects and experience
        </ProjInfo>
        <ProjInfo>Web application runs on ReactJS</ProjInfo>
        <ProjInfo>
          Created the interface using React-Bootstrap and {" "}
              <ExLink
                href="https://styled-components.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                styled components
              </ExLink>
        </ProjInfo>
      </ul>
      <br />
      <Table borderless responsive size="sm">
        <tbody>
          <tr>
            <td align="center">
              <IconJavaS width="60px" />
            </td>
            <td align="center">
              <IconHTML width="60px" />
            </td>
            <td align="center">
              <IconCSS width="60px" />
            </td>
            <td align="center">
              <IconReact width="60px" />
            </td>
            <td align="center">
              <IconBoot width="60px" />
            </td>
            <td align="center">
              <IconGit width="60px" />
            </td>
          </tr>
          <tr>
            <td align="center">Javascript</td>
            <td align="center">HTML5</td>
            <td align="center">CSS3</td>
            <td align="center">ReactJS</td>
            <td align="center">Bootstrap</td>
            <td align="center">Git</td>
          </tr>
        </tbody>
      </Table>
      <hr></hr>
    </div>
  );
};
