import { useContext, useEffect, useRef } from "react";
import { SearchContext } from "../context/search/searchContext";
import Layout from "../components/layout/Layout";

import styled from "styled-components";
import { mixins, theme } from "../styles";
import { CloseIcon, SearchIcon } from "../components/icons";

const { colors, fontSizes } = theme;

const StyledTitle = styled.h1`
  color: red;
`;

const StyledSearch = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledForm = styled.form`
  padding: 13px 15px;
  text-align: center;
  position: relative;
  background-color: ${colors.white};

  & svg {
    position: absolute;
    top: 1em;
    left: 1em;
  }

  ${mixins.boxShadow}
`;

const StyledInput = styled.input`
  height: 35px;
  border-top: 1px solid ${colors.lavender};
  border-left: 1px solid ${colors.lavender};
  border-right: 1px solid ${colors.lavender};
  font-size: ${fontSizes.sm};
  max-width: 1440px;
  width: 100%;
  padding: 0 3em;
`;

const StyledContent = styled.div`
  margin: -13px 15px 0 15px;
  border-left: 1px solid ${colors.lavender};
  border-right: 1px solid ${colors.lavender};
  background-color: ${colors.white};
  position: relative;
  padding: 2em 3em;
  font-size: ${fontSizes.sm};
`;

const StyledCloseButton = styled.button`
  position: absolute;
  top: 1em;
  right: 1em;
  background-color: transparent;
`;

const Home = () => {
  const { modal, disableModal } = useContext(SearchContext);
  const ref = useRef(null);

  useEffect(() => {
    if (modal) {
      ref.current.focus();
    }
  }, [modal, ref]);

  return (
    <Layout>
      <StyledTitle>Home</StyledTitle>

      {modal && (
        <StyledSearch>
          <StyledForm>
            <StyledInput
              type="text"
              placeholder="Discover your next favorite thing..."
              ref={ref}
            />

            <SearchIcon />
          </StyledForm>

          <StyledContent>
            <button>Press enter to see all results </button>
          </StyledContent>

          <StyledCloseButton onClick={() => disableModal()}>
            <CloseIcon />
          </StyledCloseButton>
        </StyledSearch>
      )}
    </Layout>
  );
};

export default Home;
