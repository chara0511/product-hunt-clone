import React from "react";
import Layout from "../components/layout/Layout";
import { useFormValidation } from "../hooks/useFormValidation";
import { validateSignup } from "../validations/validateSignup";

import styled from "styled-components";
import { StyledForm, StyledWrapper, mixins } from "../styles/";

const StyledInput = styled.input`
  ${mixins.link}
`;

const StyledTitle = styled.h1`
  text-align: center;
  padding: 1.25em 0;
`;

const initialState = {
  name: "",
  email: "",
  password: "",
};

const successSignup = () => {
  console.log("acc created");
};

const Signup = () => {
  const {
    values: { name, email, password },
    errors,
    submit,
    handleChange,
    handleSubmit,
  } = useFormValidation(initialState, validateSignup, successSignup);

  return (
    <div>
      <Layout>
        <>
          <StyledTitle>Sign up on Product Hunt</StyledTitle>

          <StyledForm onSubmit={handleSubmit} noValidate>
            <StyledWrapper>
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </StyledWrapper>

            <StyledWrapper>
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </StyledWrapper>

            <StyledWrapper>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={handleChange}
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
