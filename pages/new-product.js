import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import FileUploader from 'react-firebase-file-uploader';
import Layout from '../components/layout/Layout';

import FirebaseContext from '../context/firebase/FirebaseContext';
import { useFormValidation } from '../hooks/useFormValidation';
import { validateNewProduct } from '../validations/validateNewProduct';
import { ErrorIcon } from '../components/icons';
import {
  StyledErrorMessage,
  StyledForm,
  StyledInput,
  StyledTitle,
  StyledWrapper,
} from '../styles/StyledProduct';

const initialState = {
  name: '',
  company: '',
  image: '',
  url: '',
  description: '',
};

const NewProduct = () => {
  const { user, firebase } = useContext(FirebaseContext);

  const [error, setError] = useState(null);
  const [nameImage, setNameImage] = useState('');
  const [uploadImage, setUploadImage] = useState(false);
  const [progressImage, setProgressImage] = useState({});
  const [urlImage, setUrlImage] = useState('');

  const router = useRouter();

  const {
    values: { name, company, url, description },
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormValidation(initialState, validateNewProduct, async () => {
    if (!user) {
      return router.push('/login');
    }

    const product = {
      name,
      company,
      url,
      urlImage,
      description,
      votes: 0,
      comments: [],
      created: Date.now(),
    };

    firebase.db.collection('products').add(product);

    return router.push('/');
  });

  const handleUploadStart = () => {
    setProgressImage({ progress: 0 });
    setUploadImage(true);
  };

  const handleProgress = (progress) => setProgressImage({ progress });

  const handleUploadError = (err) => {
    setProgressImage(err);
  };

  const handleUploadSuccess = (img) => {
    setProgressImage({ progress: 100 });
    setUploadImage(false);
    setNameImage(img);

    firebase.storage
      .ref('products/')
      .child(img)
      .getDownloadURL()
      .then((storageUrl) => {
        setUrlImage(storageUrl);
      })
      .catch((err) => setError(err));
  };

  return (
    <div>
      <Layout>
        <StyledTitle>New Product</StyledTitle>

        <StyledForm onSubmit={handleSubmit} noValidate>
          <fieldset>
            <legend>Main Information</legend>

            <StyledWrapper>
              <label htmlFor="name">
                <input
                  type="text"
                  id="name"
                  placeholder="Enter product name"
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
              <label htmlFor="company">
                <input
                  type="text"
                  id="company"
                  placeholder="Enter your company"
                  name="company"
                  value={company}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </label>

              {errors.company && (
                <StyledErrorMessage>
                  <ErrorIcon />

                  {errors.company}
                </StyledErrorMessage>
              )}
            </StyledWrapper>

            <StyledWrapper>
              <FileUploader
                accept="image/*"
                randomizeFilename
                storageRef={firebase.storage.ref('products')}
                onUploadStart={handleUploadStart}
                onUploadError={handleUploadError}
                onUploadSuccess={handleUploadSuccess}
                onProgress={handleProgress}
              />

              {uploadImage ? (
                <p>
                  Uploading
                  {progressImage.progress}
                </p>
              ) : (
                nameImage !== '' && <p>uploaded</p>
              )}
            </StyledWrapper>

            <StyledWrapper>
              <label htmlFor="url">
                <input
                  type="url"
                  id="url"
                  placeholder="Enter a valid url"
                  name="url"
                  value={url}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </label>

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
              <label htmlFor="description">
                <textarea
                  id="description"
                  placeholder="Enter a producto description"
                  rows="3"
                  name="description"
                  value={description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </label>

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
