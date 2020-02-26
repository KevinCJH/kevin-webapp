import React from "react";
import styled from "styled-components";

const ExLink = styled.a`
  color: #333;
  text-decoration: underline;

  &:hover {
    color: #999;
  }
`;

export const Contact = () => {
  return (
    <div>
      <br />
      <h5>
        Feel free to contact me through{" "}
        <ExLink
          href="https://www.linkedin.com/in/kevinchinjh/"
          rel="noopener noreferrer"
          target="_blank"
        >
          LinkedIn
        </ExLink>.{" "}
        Thanks for sticking around and have a nice day :)
      </h5>
    </div>
  );
};
