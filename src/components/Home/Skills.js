import React from "react";
import { PLTable } from "../Tables/PLTable";
import { PFTable } from "../Tables/PFTable";

export const Skills = () => {
  return (
    <div>
      <h5>Programming languages</h5>
      <PLTable />
      <br />
      <h5>Frameworks</h5>
      <PFTable />
    </div>
  );
};
