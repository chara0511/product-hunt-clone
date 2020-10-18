import React, { useContext, useEffect, useRef } from "react";
import { SearchContext } from "../../context/search/searchContext";
import { CloseIcon, SearchIcon } from "../icons";

import styled from "styled-components";
import { media, theme } from "../../styles";

import Link from "next/link";
import { useOutsideModal } from "../../hooks/useOutsideModal";

const { colors, fontSizes } = theme;

const StyledForm = styled.form`
  position: relative;

  & svg {
    position: absolute;
    top: 5px;
    left: 5px;
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

// Search mode

const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledContent = styled.div`
  padding: 13px 15px;
  text-align: center;
  position: relative;
  background-color: ${colors.white};
  height: 46px;
  font-size: ${fontSizes.sm};

  z-index: 1;
`;

const StyledFormActive = styled.form`
  margin: auto;
  max-width: 1100px;
  position: relative;
`;

const StyledIcon = styled.span`
  position: absolute;
  top: 8px;
  left: 8px;
`;

const StyledInputActive = styled.input`
  height: 35px;
  border-top: 1px solid ${colors.lavender};
  border-left: 1px solid ${colors.lavender};
  border-right: 1px solid ${colors.lavender};
  width: 100%;
  padding: 0 3em;
`;

const StyledWrapper = styled.div`
  border-left: 1px solid ${colors.lavender};
  border-right: 1px solid ${colors.lavender};
  background-color: ${colors.white};
  position: relative;
  padding: 2em 3em;
`;

const StyledButtonIcon = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
`;

const Search = () => {
  const { searchMode, enableSearchMode, disableSearchMode } = useContext(
    SearchContext
  );

  const ref = useRef(null);

  useEffect(() => {
    if (searchMode) {
      ref.current?.focus();
    }
  }, [searchMode]);

  const wrapperRef = useRef(null);

  useOutsideModal(wrapperRef);

  return (
    <>
      {!searchMode ? (
        <StyledForm>
          <label onClick={enableSearchMode}>
            <StyledInput
              type="text"
              placeholder="Discover your next favorite thing..."
            />

            <SearchIcon />
          </label>
        </StyledForm>
      ) : (
        <StyledContainer>
          <StyledContent>
            <StyledFormActive
              ref={wrapperRef}
              onSubmit={(e) => {
                e.preventDefault();
                console.log("submitted");
              }}
            >
              <StyledIcon>
                <SearchIcon />
              </StyledIcon>

              <StyledInputActive
                type="text"
                placeholder="Discover your next favorite thing..."
                ref={ref}
              />

              <StyledWrapper>
                <Link href="/about">Press enter to see all results </Link>
              </StyledWrapper>

              {/* <input type="submit" value="do it" /> */}

              <StyledButtonIcon onClick={disableSearchMode}>
                <CloseIcon />
              </StyledButtonIcon>
            </StyledFormActive>
          </StyledContent>
        </StyledContainer>
      )}
    </>
  );
};

export default Search;
