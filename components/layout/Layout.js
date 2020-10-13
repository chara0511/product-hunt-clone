import React from "react";
import styled from "styled-components";
import Header from "../header/Header";

const StyledMain = styled.main`
  margin: 20px 0;
  padding: 0 10px;
`;

const Layout = (props) => {
  return (
    <>
      <Header />
      <StyledMain>{props.children}</StyledMain>
    </>
  );
};

export default Layout;
