import React, { useContext } from "react";
import { SearchContext } from "../../context/search/searchContext";

import styled from "styled-components";
import { SearchIcon } from "../icons";

import { media, theme } from "../../styles";

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
  width: 0;

  ${media.mdTablet`
  width: 100%;

  `}
`;

const Search = () => {
  const { enableModal } = useContext(SearchContext);

  return (
    <>
      <StyledForm>
        <StyledInput
          type="text"
          placeholder="Discover your next favorite thing..."
          onClick={() => enableModal()}
        />

        <SearchIcon />
      </StyledForm>
    </>
  );
};

export default Search;