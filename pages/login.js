import React, { useState } from 'react';
import Router from 'next/router';
import Layout from '../components/layout/Layout';
import { useFormValidation } from '../hooks/useFormValidation';
import { validateLogin } from '../validations/validateLogin';
import firebase from '../firebase';
import { ErrorIcon } from '../components/icons';
import { StyledErrorMessage, StyledForm, StyledInput, StyledWrapper } from '../styles/StyledAuth';

const initialState = {
  email: '',
  password: '',
};

const Login = () => {
  const [error, setError] = useState(null);

  const {
    values: { email, password },
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormValidation(initialState, validateLogin, async () => {
    try {
      await firebase.login(email, password);

      Router.push('/');
    } catch (err) {
      setError(err.message);
    }
  });

  return (
    <div>
      <Layout title="Log in to Product Hunt">
        <StyledForm onSubmit={handleSubmit} noValidate>
          <StyledWrapper>
            <label htmlFor="email">
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>

            {errors.email && (
              <StyledErrorMessage>
                <ErrorIcon />

                {errors.email}
              </StyledErrorMessage>
            )}
          </StyledWrapper>

          <StyledWrapper>
            <label htmlFor="password">
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="on"
              />
            </label>

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
