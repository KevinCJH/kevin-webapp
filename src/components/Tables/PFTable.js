import React from "react";
import { Table } from "react-bootstrap";
import { ReactComponent as IconAndroid } from "../../assets/devicons/android-plain.svg";
import { ReactComponent as IconDN } from "../../assets/devicons/dot-net-plain.svg";
import { ReactComponent as IconGit } from "../../assets/devicons/git-plain.svg";
import { ReactComponent as IconPS } from "../../assets/devicons/photoshop-plain.svg";
import { ReactComponent as IconReact } from "../../assets/devicons/react-original.svg";
import { ReactComponent as IconEle } from "../../assets/devicons/electron-original.svg";
import { ReactComponent as IconT } from "../../assets/devicons/travis-plain.svg";
import { ReactComponent as IconVue } from "../../assets/devicons/vuejs-plain.svg";
import { ReactComponent as IconAng } from "../../assets/devicons/angularjs-plain.svg";
import { ReactComponent as IconNode } from "../../assets/devicons/nodejs-plain.svg";

export const PFTable = () => {
  return (
    <Table borderless responsive>
      <tbody>
        <tr>
          <td>
            <IconAndroid width="80px" />
          </td>
          <td>
            <IconDN width="80px" />
          </td>
          <td>
            <IconAng width="80px" />
          </td>
          <td>
            <IconNode width="80px" />
          </td>
          <td>
            <IconReact width="80px" />
          </td>
          <td>
            <IconVue width="80px" height="80px" />
          </td>
          <td>
            <IconEle width="80px" />
          </td>
          <td>
            <IconGit width="80px" />
          </td>
          <td>
            <IconT width="80px" />
          </td>
          <td>
            <IconPS width="80px" />
          </td>
        </tr>
        <tr>
          <td align="center">Android</td>
          <td align="center">ASP.NET</td>
          <td align="center">AngularJS</td>
          <td align="center">NodeJS</td>
          <td align="center">ReactJS</td>
          <td align="center">VueJS</td>
          <td align="center">Electron</td>
          <td align="center">Git</td>
          <td align="center">Travis CI</td>
          <td align="center">Photoshop</td>
        </tr>
      </tbody>
    </Table>
  );
};
