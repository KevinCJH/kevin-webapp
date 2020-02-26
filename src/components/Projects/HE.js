import React from "react";
import { Table } from "react-bootstrap";
import { ReactComponent as IconGit } from "../../assets/devicons/git-plain.svg";
import { ReactComponent as IconJavaS } from "../../assets/devicons/javascript-plain.svg";
import { ReactComponent as IconHTML } from "../../assets/devicons/html5-plain.svg";
import { ReactComponent as IconCSS } from "../../assets/devicons/css3-plain.svg";
import { ReactComponent as IconBoot } from "../../assets/devicons/bootstrap-plain.svg";
import styled from "styled-components";

const ProjInfo = styled.li`
  padding: 10px;
`;

const ExLink = styled.a`
  color: #333;
  text-decoration: underline;

  &:hover {
    color: #999;
  }
`;

export const HE = () => {
  return (
    <div>
      <h3> Healthy365 App User Research </h3>
      <ul>
        <ProjInfo>
          Developed front-end web applications to simulate multiple versions of
          the{" "}
          <ExLink
            href="https://www.healthhub.sg/apps/25/healthy365"
            rel="noopener noreferrer"
            target="_blank"
          >
            Healthy 365 App
          </ExLink>{" "}
          based on our research question
        </ProjInfo>
        <ProjInfo>
          User interface is created using bootstrap. Trials are hardcoded into
          the web application with javascript
        </ProjInfo>
        <ProjInfo>
          Created surveys in{" "}
          <ExLink
            href="https://www.qualtrics.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Qualtrics
          </ExLink>{" "}
          to gather user feedback on their version of the app
        </ProjInfo>
        <ProjInfo>
          Created multiple timed trials with{" "}
          <ExLink
            href="https://www.mturk.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Amazon Mechanical Turk
          </ExLink>{" "}
          to test user's speed when using their version of the app
        </ProjInfo>
        <ProjInfo>
          Analysed resultant raw data of users using{" "}
          <ExLink
            href="https://www.jmp.com/en_us/software/predictive-analytics-software.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            JMP Pro
          </ExLink>{" "}
          and performed statistical analysis on the Dependent Variables
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
            <td align="center">Bootstrap</td>
            <td align="center">Git</td>
          </tr>
        </tbody>
      </Table>
      <hr></hr>
    </div>
  );
};
