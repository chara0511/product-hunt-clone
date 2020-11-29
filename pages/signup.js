import React, { useState } from 'react';
import Router from 'next/router';
import Layout from '../components/layout/Layout';
import { useFormValidation } from '../hooks/useFormValidation';
import { validateSignup } from '../validations/validateSignup';
import firebase from '../firebase';
import { ErrorIcon } from '../components/icons';
import { StyledForm, StyledWrapper, StyledErrorMessage, StyledInput } from '../styles/StyledAuth';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const Signup = () => {
  const [error, setError] = useState(null);

  const {
    values: { name, email, password },
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormValidation(initialState, validateSignup, async () => {
    try {
      await firebase.signup(name, email, password);

      Router.push('/');
    } catch (err) {
      setError(err.message);
    }
  });

  return (
    <div>
      <Layout title="Sign up on Product Hunt">
        <StyledForm onSubmit={handleSubmit} noValidate>
          <StyledWrapper>
            <label htmlFor="name">
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>

            {errors.name && (
              <StyledErrorMessage>
                <ErrorIcon />

                {errors.name}
              </StyledErrorMessage>
            )}
          </StyledWrapper>

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
            <StyledInput type="submit" value="Sign up" />
          </StyledWrapper>

          {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
        </StyledForm>
      </Layout>
    </div>
  );
};

export default Signup;
