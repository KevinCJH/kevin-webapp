import React from "react";
import { PW } from "../Projects/PW";
import { HE } from "../Projects/HE";
import { CAT } from "../Projects/CAT";
import { CHA } from "../Projects/CHA";
import { SPA } from "../Projects/SPA";
import { CHR } from "../Projects/CHR";
import { NB } from "../Projects/NB";
import { KOM } from "../Projects/KOM";
import { NYC } from "../Projects/NYC";
import styled from "styled-components";

const ProjList = styled.ul`
  list-style: none;
`;

export const Project = () => {
  return (
    <div>
      <h5>Here are some of my past projects</h5>
      <br />
      <ProjList>
        <li>
          <PW />
        </li>
        <li>
          <HE />
        </li>
        <li>
          <CAT />
        </li>
        <li>
          <SPA />
        </li>
        <li>
          <CHA />
        </li>
        <li>
          <CHR />
        </li>
        <li>
          <NB />
        </li>
        <li>
          <KOM />
        </li>
        <li>
          <NYC />
        </li>
      </ProjList>
    </div>
  );
};
