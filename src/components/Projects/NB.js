import React from "react";
import { Table } from "react-bootstrap";
import { ReactComponent as IconJava } from "../../assets/devicons/java-plain.svg";
import { ReactComponent as IconAndroid } from "../../assets/devicons/android-plain.svg";
import { ReactComponent as IconGit } from "../../assets/devicons/git-plain.svg";
import projImg from "../../assets/project/nb.PNG";
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

export const NB = () => {
  return (
    <div>
      <h3>
        <TitleLink href={projImg} rel="noopener noreferrer" target="_blank">
          Neighber
        </TitleLink>
      </h3>
      <ul>
        <ProjInfo>
          An independent project for year 1 student in NUS (
          <TitleLink
            href="https://orbital.comp.nus.edu.sg/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Orbital
          </TitleLink>
          ). The mobile app is used by users to conveniently request and borrow
          items from other users nearby
        </ProjInfo>
        <ProjInfo>
          Conducted user research and interview targeting groups who are staying
          in rented apartment/hostel
        </ProjInfo>
        <ProjInfo>Created low-fidelity wireframe for user feedback</ProjInfo>
        <ProjInfo>
          Created wireframe using{" "}
          <TitleLink
            href="https://mockingbot.in/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Mocking Bot
          </TitleLink>{" "}
          for usability testing
        </ProjInfo>
        <ProjInfo>
          Developed prototype mobile app with core features, with the back-end
          supported by{" "}
          <TitleLink
            href="https://firebase.google.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Firebase
          </TitleLink>
          . Development was done on Android Studio
        </ProjInfo>
        <ProjInfo>
          Developed proper user interface and security features like encryption
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
              <IconAndroid width="60px" />
            </td>
            <td align="center">
              <IconGit width="60px" />
            </td>
          </tr>
          <tr>
            <td align="center">Java</td>
            <td align="center">Android</td>
            <td align="center">Git</td>
          </tr>
        </tbody>
      </Table>
      <hr></hr>
    </div>
  );
};
