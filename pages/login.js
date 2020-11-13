import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { useFormValidation } from "../hooks/useFormValidation";
import { validateLogin } from "../validations/validateLogin";
import firebase from "../firebase";
import Router from "next/router";
import { ErrorIcon } from "../components/icons";
import {
  StyledErrorMessage,
  StyledForm,
  StyledInput,
  StyledTitle,
  StyledWrapper,
} from "../styles/StyledAuth";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [error, setError] = useState(null);

  const successLogin = async () => {
    try {
      await firebase.login(email, password);

      Router.push("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const {
    values: { email, password },
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormValidation(initialState, validateLogin, successLogin);

  return (
    <div>
      <Layout>
        <StyledTitle>Log in</StyledTitle>

        <StyledForm onSubmit={handleSubmit} noValidate>
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
            <StyledInput type="submit" value="Log in" />
          </StyledWrapper>

          {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
        </StyledForm>
      </Layout>
    </div>
  );
};

export default Login;
