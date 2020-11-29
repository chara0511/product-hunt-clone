import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from '../header/Header';
import { theme } from '../../styles';

const { fontSizes } = theme;

const StyledMain = styled.main`
  margin: 20px auto;
  padding: 0 15px;
  max-width: 1100px;
  position: ${({ title }) => (title === 'today' || title === 'popular' ? 'relative' : 'inherit')};
  z-index: ${({ zindex }) => zindex};
`;

const StyledTitle = styled.div`
  margin-bottom: 10px;

  & span {
    line-height: 32px;
    font-size: ${fontSizes.lg};
    font-weight: 600;
    text-transform: capitalize;
  }
`;

const Layout = ({ children, head = 'Product Hunt Clone', title, zindex }) => {
  return (
    <>
      <Head>
        <title>{head}</title>
      </Head>

      <Header />

      <StyledMain zindex={zindex} title={title}>
        <StyledTitle>
          <span>{title}</span>
        </StyledTitle>
        {children}
      </StyledMain>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  head: PropTypes.string,
  title: PropTypes.string.isRequired,
  zindex: PropTypes.string,
};

export default Layout;
