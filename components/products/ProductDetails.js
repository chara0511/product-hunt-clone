import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import styled from 'styled-components';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Comment from '../icons/Comment';
import {
  StyledContent,
  StyledProductDetails,
  StyledWrapper,
  StyledDescription,
  StyledComments,
  StyledVotes,
} from '../../styles/StyledProductDetails';

const StyledImage = styled.img`
  width: 200px;
`;

const ProductDetails = ({
  product: { id, comments, created, description, name, urlImage, votes },
}) => {
  // company
  // url;

  return (
    <StyledProductDetails>
      <StyledContent>
        <div>
          <StyledImage src={urlImage} alt={`${name} product`} />
        </div>

        <StyledWrapper>
          <StyledDescription>
            <Link href="products/[id]" as={`/products/${id}`}>
              <h2>{name}</h2>
            </Link>
            <p>{description}</p>
          </StyledDescription>

          <StyledComments>
            <Comment />
            <p>
              {comments.length}
              comments
            </p>
          </StyledComments>

          <StyledVotes>
            <div onClick={() => console.log('clicked')}>
              <p>
                {' '}
                &#9650;
                {votes}
              </p>
            </div>

            <p>{formatDistanceToNow(created)}</p>
          </StyledVotes>
        </StyledWrapper>
      </StyledContent>
    </StyledProductDetails>
  );
};

ProductDetails.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductDetails;
