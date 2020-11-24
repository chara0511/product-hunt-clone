import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from '../header/Header';

const StyledMain = styled.main`
  margin: 20px 0;
  padding: 0 15px;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Product Hunt Clone</title>
      </Head>

      <Header />

      <StyledMain>{children}</StyledMain>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
