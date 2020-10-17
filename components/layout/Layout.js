import React from "react";
import Head from "next/head";
import Header from "../header/Header";

import styled from "styled-components";

const StyledMain = styled.main`
  margin: 20px 0;
  padding: 0 15px;
`;

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Product Hunt Clone</title>
      </Head>

      <Header />

      <StyledMain>{props.children}</StyledMain>
    </>
  );
};

export default Layout;
