import React from "react";

import Auth from "./Auth";
import Nav from "./Nav";
import Search from "./Search";

import styled from "styled-components";
import { mixins, theme } from "../../styles";
import { Logo } from "../icons";

const { colors } = theme;

const StyledHeader = styled.header`
  background-color: ${colors.white};
  padding: 13px;
  position: sticky;
  top: 0;

  ${mixins.flexBetween}

  ${mixins.boxShadow}
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo />

      <Search />

      <Nav />

      <Auth />
    </StyledHeader>
  );
};

export default Header;
