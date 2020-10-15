import React from "react";

import Auth from "./Auth";
import Nav from "./Nav";
import Search from "./Search";

import styled from "styled-components";
import { mixins, StyledLink, theme } from "../../styles";
import { Logo } from "../icons";

const { colors } = theme;

const StyledHeader = styled.header`
  background-color: ${colors.white};
  padding: 13px 15px;
  position: sticky;
  top: 0;
  height: 46px;

  box-shadow: ${theme.shadows.header};

  ${mixins.flexBetween}

  & .__logo {
    border-radius: 50%;
    border: none;
    margin: 0;
    padding: 0;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledLink className="__logo" href="/">
        <Logo />
      </StyledLink>

      <Search />

      <Nav />

      <Auth />
    </StyledHeader>
  );
};

export default Header;
