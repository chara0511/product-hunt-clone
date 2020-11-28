import styled from 'styled-components';

import mixins from './mixins';
import theme from './theme';

const { borderRadius, colors, fontSizes, transition, shadows } = theme;

export const StyledProductId = styled.div`
  border: 2px solid red;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 100px 16px 32px 16px;
  background-color: ${colors.darkslategray};
`;

export const StyledContent = styled.div`
  background-color: ${colors.whitesmoke};
  border-radius: ${borderRadius};
  padding: 20px;
  max-width: 1100px;
  margin: 0 auto;

  & hr {
    border-top: 1px solid ${colors.lavender};
    border-left: none;
    margin: 20px 0;
  }
`;

export const StyledHeaderContent = styled.div`
  border: 1px solid blue;
  ${mixins.flexLeft};

  & img {
    width: 80px;
    height: 80px;
    margin-right: 8px;
    border-radius: ${borderRadius};
    object-fit: cover;
  }
`;

export const StyledTitle = styled.div`
  & h1 {
    font-size: ${fontSizes.lg};
    font-weight: 500;
    line-height: 32px;
  }

  p {
    font-size: ${fontSizes.xs};
    line-height: 20px;
  }
`;

export const StyledBodyContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  column-gap: 1em;

  & aside {
    padding: 20px 0px;
  }
`;

export const StyledImage = styled.div`
  background-color: ${colors.white};
  padding: 20px;

  & img {
    max-width: 700px;
    width: 100%;
    height: 380px;
    object-fit: cover;
  }
`;

export const StyledWrapper = styled.div`
  border: 1px solid orange;

  & input[type='submit'] {
    display: block;
    width: 100px;
    margin: auto;
  }
`;

export const StyledDescription = styled.p`
  border: 1px solid brown;
  max-width: 700px;
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

export const StyledBtnVotes = styled.a`
  ${mixins.bigButton};

  ${mixins.flexCenter};
`;

export const StyledURLs = styled.div`
  background-color: ${colors.white};
  height: 60px;
  border-radius: ${borderRadius};
  border: 1px solid ${colors.lavender};
  position: relative;
  transition: ${transition};
  box-shadow: ${shadows.url};

  ${mixins.flexLeft};

  & div {
    ${mixins.flexBetween};
    flex-direction: column;

    & span {
      max-width: 210px;
      width: 100%;
      font-size: ${fontSizes.xs};
      line-height: 20px;
      font-weight: 700;

      &:last-of-type {
        color: ${colors.gray};
        font-weight: 600;
      }
    }
  }

  & .arrowRight {
    position: absolute;
    right: 0;
  }

  &:hover {
    border: 1px solid ${colors.lightGray};
  }
`;

export const StyledOwner = styled.div`
  background-color: ${colors.white};
  box-shadow: ${shadows.url};
  border-radius: ${borderRadius};
  padding: 16px;

  & h3 {
    text-transform: uppercase;
    font-size: ${fontSizes.xs};
    line-height: 16px;
    font-weight: 500;
    color: ${colors.gray};
    margin-bottom: 10px;
  }

  & h4,
  & p {
    text-transform: capitalize;
    font-weight: 600;
    line-height: 20px;
  }
`;

export const StyledOwnerProfile = styled.div`
  & img {
    width: 30px;
    border-radius: 50%;
    margin-right: 8px;
  }

  & div {
    flex: 1;
  }

  ${mixins.flexBetween};
`;
