import React from "react";
import { formatDistanceToNow } from "date-fns";
import styled from "styled-components";
import Comment from "../icons/Comment";
import {
  StyledContent,
  StyledProductDetails,
  StyledWrapper,
  StyledDescription,
  StyledComments,
  StyledVotes,
} from "../../styles/StyledProductDetails";

const StyledImage = styled.img`
  width: 200px;
`;

const ProductDetails = ({
  product: {
    comments,
    company,
    created,
    description,
    name,
    url,
    urlImage,
    votes,
  },
}) => {
  return (
    <StyledProductDetails>
      <StyledContent>
        <div>
          <StyledImage src={urlImage} alt={`${name} product`} />
        </div>

        <StyledWrapper>
          <StyledDescription>
            <h2>{name}</h2>
            <p>{description}</p>
          </StyledDescription>

          <StyledComments>
            <Comment />
            <p>{comments.length} comments</p>
          </StyledComments>

          <StyledVotes>
            <div onClick={() => console.log("clicked")}>
              <p> &#9650; {votes}</p>
            </div>

            <p>{formatDistanceToNow(created)}</p>
          </StyledVotes>
        </StyledWrapper>
      </StyledContent>
    </StyledProductDetails>
  );
};

export default ProductDetails;
