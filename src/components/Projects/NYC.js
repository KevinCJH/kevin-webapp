import React from "react";
import { Table } from "react-bootstrap";
import { ReactComponent as IconCSh } from "../../assets/devicons/csharp-plain.svg";
import { ReactComponent as IconDN } from "../../assets/devicons/dot-net-plain.svg";
import { ReactComponent as IconSQL } from "../../assets/devicons/mysql-plain.svg";
import { ReactComponent as IconJQ } from "../../assets/devicons/jquery-plain.svg";
import projImg from "../../assets/project/nyc.png";
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

export const NYC = () => {
  return (
    <div>
      <h3>
        <TitleLink href={projImg} rel="noopener noreferrer" target="_blank">
          "Now You Can" Presentation Hub
        </TitleLink>
      </h3>
      <ul>
        <ProjInfo>
          Developed a web platform for student who wish to improve their
          presentation skills. Users can upload their video on youtube and post
          the link onto the platform for other users (mentors) to feedback
        </ProjInfo>
        <ProjInfo>
          Developed using ASP.NET front-end and MySQL back-end
        </ProjInfo>
        <ProjInfo>
          Developed login and registration as well as user post and account
          management
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
              <IconJQ width="60px" />
            </td>
            <td align="center">
              <IconSQL width="60px" />
            </td>
            <td align="center">
              <IconDN width="60px" />
            </td>
          </tr>
          <tr>
            <td align="center">C#</td>
            <td align="center">jQuery</td>
            <td align="center">MySQL</td>
            <td align="center">.NET</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
