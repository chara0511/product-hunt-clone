import { useContext } from "react";
import { SearchContext } from "../context/search/searchContext";
import styled from "styled-components";
import Layout from "../components/layout/Layout";
import { mixins, theme } from "../styles";

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
  padding: 13px;
  text-align: center;

  ${mixins.boxShadow}
`;

const StyledInput = styled.input`
  height: 35px;
  border: 1px solid ${colors.lavender};
  font-size: ${fontSizes.sm};
  max-width: 1440px;
  width: 100%;
`;

const Home = () => {
  const { modal, disableModal } = useContext(SearchContext);

  return (
    <Layout>
      <StyledTitle>Home</StyledTitle>

      {modal && (
        <StyledSearch>
          <StyledForm>
            <StyledInput
              type="text"
              placeholder="Discover your next favorite thing..."
            />
          </StyledForm>

          <button onClick={() => disableModal()}>X</button>
        </StyledSearch>
      )}
    </Layout>
  );
};

export default Home;
