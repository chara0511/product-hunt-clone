import styled from 'styled-components';

import mixins from './mixins';
import theme from './theme';

const { borderRadius, colors } = theme;

export const StyledProductId = styled.div`
  border: 1px solid red;
`;

export const StyledTitle = styled.div`
  border: 1px solid blue;
  text-align: center;

  & h1 {
    padding: 1.25em 0;
  }
`;

export const StyledImage = styled.div`
  border: 1px solid green;

  & img {
    width: 300px;
    height: 300px;
    object-fit: cover;
  }
`;

export const StyledWrapper = styled.div`
  border: 1px solid orange;

  input[type='submit'] {
    display: block;
    width: 100px;
    margin: auto;
  }
`;

export const StyledDescription = styled.p`
  border: 1px solid brown;
`;

export const StyledInput = styled.input`
  ${mixins.link}
`;

export const StyledComments = styled.ul`
  background-color: ${colors.whitesmoke};
  border-radius: ${borderRadius};
  max-width: 150px;
  width: 100%;
  padding: 0.25rem 0.5rem;
  margin: 1rem 0;
`;

export const StyledVotes = styled.div`
  ${mixins.flexBetween};
  margin: 1rem 0;
  max-width: 300px;
  width: 100%;
`;
