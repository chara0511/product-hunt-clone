import styled from "styled-components";
import Layout from "../components/layout/Layout";

const StyledTitle = styled.div`
  color: red;
`;

const About = () => {
  return (
    <Layout>
      <StyledTitle>About us</StyledTitle>
    </Layout>
  );
};

export default About;
