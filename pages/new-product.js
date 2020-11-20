import React, { useContext, useState } from "react";
import Layout from "../components/layout/Layout";

import { Router, useRouter } from "next/router";
import { useFormValidation } from "../hooks/useFormValidation";
import { validateNewProduct } from "../validations/validateNewProduct";
import {
  StyledErrorMessage,
  StyledForm,
  StyledInput,
  StyledTitle,
  StyledWrapper,
} from "../styles/StyledProduct";
import { ErrorIcon } from "../components/icons";
import FirebaseContext from "../context/firebase/FirebaseContext";

const initialState = {
  name: "",
  company: "",
  image: "",
  url: "",
  description: "",
};

const NewProduct = () => {
  const { user, firebase } = useContext(FirebaseContext);

  const [error, setError] = useState(null);

  const router = useRouter();

  const successLogin = async () => {
    if (!user) {
      return router.push("/login");
    }

    const product = {
      name,
      company,
      url,
      description,
      votes: 0,
      comments: [],
      created: Date.now(),
    };

    firebase.db.collection("products").add(product);
  };

  const {
    values: { name, company, image, url, description },
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormValidation(initialState, validateNewProduct, successLogin);

  return (
    <div>
      <Layout>
        <StyledTitle>New Product</StyledTitle>

        <StyledForm onSubmit={handleSubmit} noValidate>
          <fieldset>
            <legend>Main Information</legend>

            <StyledWrapper>
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                id="name"
                placeholder="Enter product name"
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
              <label htmlFor="company">Company:</label>
              <input
                type="text"
                id="company"
                placeholder="Enter your company"
                name="company"
                value={company}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {errors.company && (
                <StyledErrorMessage>
                  <ErrorIcon />

                  {errors.company}
                </StyledErrorMessage>
              )}
            </StyledWrapper>

            {/* <StyledWrapper>
              <label htmlFor="image">Image:</label>
              <input
                type="file"
                id="image"
                name="image"
                value={image}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {errors.image && (
                <StyledErrorMessage>
                  <ErrorIcon />

                  {errors.image}
                </StyledErrorMessage>
              )}
            </StyledWrapper> */}

            <StyledWrapper>
              <label htmlFor="url">URL:</label>
              <input
                type="url"
                id="url"
                placeholder="Enter a valid url"
                name="url"
                value={url}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {errors.url && (
                <StyledErrorMessage>
                  <ErrorIcon />

                  {errors.url}
                </StyledErrorMessage>
              )}
            </StyledWrapper>
          </fieldset>

          <fieldset>
            <legend>Product information</legend>

            <StyledWrapper>
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                placeholder="Enter a producto description"
                rows="3"
                name="description"
                value={description}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {errors.description && (
                <StyledErrorMessage>
                  <ErrorIcon />

                  {errors.description}
                </StyledErrorMessage>
              )}
            </StyledWrapper>
          </fieldset>

          <StyledWrapper>
            <StyledInput type="submit" value="Create Product" />
          </StyledWrapper>

          {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
        </StyledForm>
      </Layout>
    </div>
  );
};

export default NewProduct;
