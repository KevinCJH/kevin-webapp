import React from "react";
import { Table } from "react-bootstrap";
import { ReactComponent as IconAndroid } from "../../assets/devicons/android-plain.svg";
import { ReactComponent as IconCSh } from "../../assets/devicons/csharp-plain.svg";
import { ReactComponent as IconJavaS } from "../../assets/devicons/javascript-plain.svg";
import projImg from "../../assets/project/kom.png";
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

export const KOM = () => {
  return (
    <div>
      <h3>
        <TitleLink href={projImg} rel="noopener noreferrer" target="_blank">
          Keppel Offshore and Marines (KOM) Mobile Application
        </TitleLink>
      </h3>
      <ul>
        <ProjInfo>
          Worked with Keppel to identify key problems faced by employees in
          day-to-day operations as a Final Year Project in Singapore Polytechnic
        </ProjInfo>
        <ProjInfo>
          Created Activity diagram and Use Case diagram for the key problems
          identified
        </ProjInfo>
        <ProjInfo>
          Developed 3 disposable mobile application as prototype to solve 3 key
          problems. Development was done using{" "}
          <TitleLink
            href="https://www.appcelerator.com/Titanium/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Titanium Studio
          </TitleLink>{" "}
          for cross-platform capabilities
        </ProjInfo>
        <ProjInfo>
          Developed web services to work with the mobile application and an
          online platform for administrator to manage the database
        </ProjInfo>
        <ProjInfo>
          Developed a final application which encompasses the 3 smaller
          application with proper user interface and sign-in features
        </ProjInfo>
      </ul>
      <br />
      <Table borderless responsive size="sm">
        <tbody>
          <tr>
            <td align="center">
              <IconCSh width="60px" />
            </td>
            <td align="center">
              <IconJavaS width="60px" />
            </td>
            <td align="center">
              <IconAndroid width="60px" />
            </td>
          </tr>
          <tr>
            <td align="center">C#</td>
            <td align="center">Javascript</td>
            <td align="center">Android</td>
          </tr>
        </tbody>
      </Table>
      <hr></hr>
    </div>
  );
};
