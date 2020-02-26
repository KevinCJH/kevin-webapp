import React from "react";
import { Table } from "react-bootstrap";
import { ReactComponent as IconC } from "../../assets/devicons/c-plain.svg";
import { ReactComponent as IconCSh } from "../../assets/devicons/csharp-plain.svg";
import { ReactComponent as IconCPP } from "../../assets/devicons/cplusplus-plain.svg";
import { ReactComponent as IconJava } from "../../assets/devicons/java-plain.svg";
import { ReactComponent as IconJavaS } from "../../assets/devicons/javascript-plain.svg";
import { ReactComponent as IconTypeS } from "../../assets/devicons/typescript-plain.svg";
import { ReactComponent as IconJQ } from "../../assets/devicons/jquery-plain.svg";
import { ReactComponent as IconHTML } from "../../assets/devicons/html5-plain.svg";
import { ReactComponent as IconCSS } from "../../assets/devicons/css3-plain.svg";
import { ReactComponent as IconSQL } from "../../assets/devicons/mysql-plain.svg";

export const PLTable = () => {
  return (
    <Table borderless responsive>
      <tbody>
        <tr>
          <td>
            <IconC width="80px" />
          </td>
          <td>
            <IconCSh width="80px" />
          </td>
          <td>
            <IconCPP width="80px" />
          </td>
          <td>
            <IconJava width="80px" />
          </td>
          <td>
            <IconJQ width="80px" />
          </td>
          <td>
            <IconJavaS width="80px" />
          </td>
          <td>
            <IconTypeS width="80px" />
          </td>
          <td>
            <IconHTML width="80px" />
          </td>
          <td>
            <IconCSS width="80px" />
          </td>
          <td>
            <IconSQL width="80px" />
          </td>
        </tr>
        <tr>
          <td align="center">C</td>
          <td align="center">C#</td>
          <td align="center">C++</td>
          <td align="center">Java</td>
          <td align="center">JQuery</td>
          <td align="center">Javascript</td>
          <td align="center">Typescript</td>
          <td align="center">HTML5</td>
          <td align="center">CSS3</td>
          <td align="center">MySQL</td>
        </tr>
      </tbody>
    </Table>
  );
};
