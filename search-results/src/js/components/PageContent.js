import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";

export default const PageContent = styled.div`
  margin: auto;
  font-family: "sans-serif";
  text-align: center;

  @media ${breakpoints.laptop} {
    max-width: 800px;
  }

  @media ${breakpoints.desktop} {
    max-width: 1400px;
  }
`;
