import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import { SearchContext } from '../../context/search/searchContext';
import { CloseIcon, SearchIcon } from '../icons';

import { media, theme } from '../../styles';

import { useOutsideModal } from '../../hooks/useOutsideModal';
import Result from './Result';

const { colors, fontSizes } = theme;

const StyledForm = styled.form`
  position: relative;

  & svg {
    position: absolute;
    top: 5px;
    left: 5px;
  }

  & input {
    height: 35px;
    border: 1px solid ${colors.lavender};
    padding: 0px 10px 0px 32px;
    font-size: ${fontSizes.sm};
    width: 0;

    ${media.mdTablet`
      width: 100%;
    `}
  }
`;

// Search mode
const StyledContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  left: 0;
  min-height: 100vh;
  position: absolute;
  right: 0;
  top: 0;
`;

const StyledContent = styled.div`
  background-color: ${colors.white};
  font-size: ${fontSizes.sm};
  height: 46px;
  position: relative;
  padding: 13px 15px;
  text-align: center;
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
  const { searchMode, enableSearchMode, disableSearchMode } = useContext(SearchContext);
  const [search, setSearch] = useState({ value: '' });

  const ref = useRef(null);

  useEffect(() => {
    if (searchMode) {
      ref.current?.focus();
    }
  }, [searchMode]);

  const wrapperRef = useRef(null);

  useOutsideModal(wrapperRef);

  const handleSubmitSearch = (e) => {
    e.preventDefault();

    if (search.value.trim() === '') return;

    Router.push({ query: { q: search.value } });
  };

  return (
    <>
      {!searchMode ? (
        <StyledForm onClick={enableSearchMode}>
          <label htmlFor="search">
            <input
              id="search"
              name="search"
              type="text"
              placeholder="Discover your next favorite thing..."
            />

            <SearchIcon />
          </label>
        </StyledForm>
      ) : (
        <StyledContainer>
          <StyledContent>
            <StyledFormActive ref={wrapperRef} onSubmit={handleSubmitSearch}>
              <StyledIcon>
                <SearchIcon />
              </StyledIcon>

              <StyledInputActive
                type="text"
                placeholder="Discover your next favorite thing..."
                ref={ref}
                name="value"
                value={search.value}
                autoComplete="off"
                onChange={({ target }) => setSearch({ [target.name]: target.value })}
              />

              <StyledWrapper>
                {search.value === '' ? (
                  <p>Press enter to see results </p>
                ) : (
                  <Result disableSearchMode={disableSearchMode} />
                )}
              </StyledWrapper>

              <input type="submit" style={{ display: 'none' }} />

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
