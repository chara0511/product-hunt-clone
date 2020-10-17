import React from "react";
import styled from "styled-components";
import Layout from "../components/layout/Layout";
import { StyledForm, StyledWrapper, mixins } from "../styles/";

const StyledInput = styled.input`
  ${mixins.link}
`;

const StyledTitle = styled.h1`
  text-align: center;
  padding: 1.25em 0;
`;

const Signup = () => {
  return (
    <div>
      <Layout>
        <>
          <StyledTitle>Sign up on Product Hunt</StyledTitle>

          <StyledForm>
            <StyledWrapper>
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                name="name"
              />
            </StyledWrapper>

            <StyledWrapper>
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                name="email"
              />
            </StyledWrapper>

            <StyledWrapper>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                name="password"
              />
            </StyledWrapper>

            <StyledInput type="submit" value="Sign up" />
          </StyledForm>
        </>
      </Layout>
    </div>
  );
};

export default Signup;
