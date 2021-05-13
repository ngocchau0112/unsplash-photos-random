import React from "react";
import styled from "styled-components";

const Header = styled.header`
  max-width: 70rem;
  margin: 2rem auto;
  text-align: center;
`;

const H1 = styled.h1`
  font-family: "Lobster Two", cursive;
  font-style: italic;
  font-size: 80px;
  margin-bottom: 0.8em;

  @media (max-width: 300px) {
    font-size: 65px;
  }
`;

const Heading = () => {
  return (
    <Header>
      <H1>
        <a href="https://unsplash.com/" target="_blank" rel="noreferrer">
          Unsplash
        </a>
      </H1>
    </Header>
  );
};

export default Heading;
