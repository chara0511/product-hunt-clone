import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Comment from '../icons/Comment';
import {
  StyledContent,
  StyledImage,
  StyledProductDetails,
  StyledWrapper,
  StyledDescription,
  StyledComments,
  StyledVotes,
  StyledTopic,
  StyledMeta,
} from '../../styles/StyledProductDetails';

const ProductDetails = ({
  product: { id, comments, company, description, name, urlImage, votes },
}) => {
  // url;

  return (
    <StyledProductDetails>
      <StyledContent>
        <StyledImage src={urlImage} alt={`${name} product`} />

        <StyledWrapper>
          <StyledDescription>
            <Link href={`/products/${id}`} as={`/products/${id}`}>
              <h3>{name}</h3>
            </Link>
            <p>{description}</p>
          </StyledDescription>

          <StyledMeta>
            <StyledComments>
              <span>
                <Comment />
                &nbsp;
                {comments.length}
              </span>
            </StyledComments>

            <StyledTopic>
              <span>{company}</span>
            </StyledTopic>
          </StyledMeta>
        </StyledWrapper>
      </StyledContent>

      <StyledVotes>
        <div>
          <p>&#9650;</p>
        </div>

        <p>{votes}</p>
      </StyledVotes>
    </StyledProductDetails>
  );
};

ProductDetails.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductDetails;
