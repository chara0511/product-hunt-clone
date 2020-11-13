import Layout from "../components/layout/Layout";

import styled from "styled-components";

const StyledTitle = styled.h1`
  color: red;
`;

const Home = () => {
  return (
    <Layout>
      <StyledTitle>Home</StyledTitle>
    </Layout>
  );
};

export default Home;
