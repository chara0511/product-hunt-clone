import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { useFormValidation } from "../hooks/useFormValidation";
import { validateSignup } from "../validations/validateSignup";
import firebase from "../firebase";
import Router from "next/router";
import { ErrorIcon } from "../components/icons";
import {
  StyledTitle,
  StyledForm,
  StyledWrapper,
  StyledErrorMessage,
  StyledInput,
} from "../styles/StyledAuth";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const Signup = () => {
  const [error, setError] = useState(null);

  const successSignup = async () => {
    try {
      await firebase.signup(name, email, password);

      Router.push("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const {
    values: { name, email, password },
    errors,
    handleChange,
    handleBlur,
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
                onBlur={handleBlur}
              />

              {errors.name && (
                <StyledErrorMessage>
                  <ErrorIcon />

                  {errors.name}
                </StyledErrorMessage>
              )}
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
                onBlur={handleBlur}
              />

              {errors.email && (
                <StyledErrorMessage>
                  <ErrorIcon />

                  {errors.email}
                </StyledErrorMessage>
              )}
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
                onBlur={handleBlur}
              />

              {errors.password && (
                <StyledErrorMessage>
                  <ErrorIcon />

                  {errors.password}
                </StyledErrorMessage>
              )}
            </StyledWrapper>

            <StyledWrapper>
              <StyledInput type="submit" value="Sign up" />
            </StyledWrapper>

            {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
          </StyledForm>
        </>
      </Layout>
    </div>
  );
};

export default Signup;
