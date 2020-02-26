import React from "react";
import { Table } from "react-bootstrap";
import { ReactComponent as IconVue } from "../../assets/devicons/vuejs-plain.svg";
import { ReactComponent as IconNode } from "../../assets/devicons/nodejs-plain.svg";
import { ReactComponent as IconGit } from "../../assets/devicons/git-plain.svg";
import { ReactComponent as IconJavaS } from "../../assets/devicons/javascript-plain.svg";
import { ReactComponent as IconHTML } from "../../assets/devicons/html5-plain.svg";
import { ReactComponent as IconCSS } from "../../assets/devicons/css3-plain.svg";
import { ReactComponent as IconT } from "../../assets/devicons/travis-plain.svg";
import projImg from "../../assets/project/cha.PNG";
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

export const CHA = () => {
  return (
    <div>
      <h3>
        <TitleLink href={projImg} rel="noopener noreferrer" target="_blank">
          Chair Data Visualisation
        </TitleLink>
      </h3>
      <ul>
        <ProjInfo>
          Developed the front-end for a web application to process and visualize
          json data
        </ProjInfo>
        <ProjInfo>
          Web application runs on Vue.js, data visualization is done using{" "}
          <TitleLink
            href="https://www.chartjs.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Chart.js
          </TitleLink>
        </ProjInfo>
        <ProjInfo>
          The backend runs on NodeJS express to process the raw vsc file data
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
              <IconNode width="60px" />
            </td>
            <td align="center">
              <IconVue width="60px" height="60px" />
            </td>
            <td align="center">
              <IconGit width="60px" />
            </td>
            <td align="center">
              <IconT width="60px" />
            </td>
          </tr>
          <tr>
            <td align="center">Javascript</td>
            <td align="center">HTML5</td>
            <td align="center">CSS3</td>
            <td align="center">NodeJS</td>
            <td align="center">VueJS</td>
            <td align="center">Git</td>
            <td align="center">Travis CI</td>
          </tr>
        </tbody>
      </Table>
      <hr></hr>
    </div>
  );
};
