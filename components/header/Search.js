import React from "react";
import styled from "styled-components";
import { theme } from "../../styles";

import { SearchIcon } from "../icons";

const { colors, fontSizes } = theme;

const StyledForm = styled.form`
  position: relative;

  & svg {
    position: absolute;
    top: 8px;
    left: 8px;
  }
`;

const StyledInput = styled.input`
  height: 35px;
  border: 1px solid ${colors.lavender};
  padding: 0px 10px 0px 32px;
  font-size: ${fontSizes.sm};
`;

const Search = () => {
  return (
    <StyledForm>
      <StyledInput
        type="text"
        placeholder="Discover your next favorite thing..."
      />

      <SearchIcon />
    </StyledForm>
  );
};

export default Search;
