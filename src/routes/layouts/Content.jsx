import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import MM00 from "../MM00";

const WholeWrapper = styled.div`
  width: 100%;
`;

const Content = () => {
  return (
    <WholeWrapper>
      <Route exact path="/" component={MM00} />
    </WholeWrapper>
  );
};

export default Content;
