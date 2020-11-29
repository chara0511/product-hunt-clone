import styled from 'styled-components';
import { media } from './media';

import mixins from './mixins';
import theme from './theme';

const { borderRadius, colors, fontSizes, transition, shadows } = theme;

export const StyledProductId = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 100px 16px 56px 16px;
  background-color: ${colors.darkslategray};
`;

export const StyledModalClose = styled.div`
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 49;
  background-color: ${colors.darkgray};

  & a {
    position: fixed;
    z-index: 99;
    border-radius: 0 25px 25px 0;
    padding: 8px 10px 8px 20px;
    background-color: ${colors.darkgray};
    top: 12px;
    left: 0;
  }

  & svg {
    fill: ${colors.white};
    display: block;
  }

  ${media.lgTablet`
  position: initial;
  height:0;

    & a {
    position: absolute;   
  }
`}
`;

export const StyledContent = styled.div`
  background-color: ${colors.whitesmoke};
  border-radius: ${borderRadius};
  padding: 20px;
  max-width: 1100px;
  margin: 0 auto;

  & h2 {
    font-size: ${fontSizes.sm};
    line-height: 16px;
    text-transform: uppercase;
    color: ${colors.darkslategray};
    margin: 20px 0;
  }

  & hr {
    border-top: 1px solid ${colors.lavender};
    border-bottom: none;
    border-right: none;
    border-left: none;
    margin: 20px 0;
  }
`;

export const StyledHeaderContent = styled.div`
  margin-bottom: 20px;
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
  ${media.lgTablet`
    display: grid;
    grid-template-columns: 1fr 0.5fr;
    column-gap: 1em;
    `}

  & aside {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: inherit;
  }
`;

export const StyledImage = styled.div`
  background-color: ${colors.white};
  border-radius: ${borderRadius};
  box-shadow: ${shadows.url};
  padding: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
  max-width: 700px;

  & img {
    width: 100%;
    height: 220px;
    object-fit: cover;
  }

  ${media.mdTablet`

    & img {
      height: 300px;
    }
  `}

  ${media.lgTablet`
    padding: 20px;

    & img {
      height: 380px;
    }
  `}
`;

export const StyledDescription = styled.div`
  max-width: 700px;

  p {
    font-size: ${fontSizes.sm};
    line-height: 20px;
    margin-bottom: 20px;
  }

  span {
    font-size: ${fontSizes.xs};
    line-height: 16px;
    text-transform: uppercase;
    color: ${colors.gray};
    border-radius: ${borderRadius};
    border: 1px solid ${colors.lavender};
    padding: 8px 10px;
    text-align: center;
    display: block;
    max-width: 175px;
    width: 100%;
  }
`;

export const StyledBtnVotes = styled.a`
  position: fixed;
  top: 12px;
  right: 15px;
  z-index: 99;
  ${mixins.bigButton};

  ${mixins.flexCenter};
  ${media.lgTablet`
    position: inherit;
  `}
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
    height: 30px;
    border-radius: 50%;
    margin-right: 8px;
  }

  & div {
    flex: 1;
  }

  ${mixins.flexBetween};
`;

export const StyledDiscussion = styled.div`
  border-radius: ${borderRadius};
  box-shadow: ${shadows.url};
  padding: 20px;
  background-color: ${colors.white};
  max-width: 700px;
  box-sizing: border-box;

  & form {
    ${mixins.flexBetween};
  }
`;

export const StyledInput = styled.input`
  border-radius: ${borderRadius};
  border: 1px solid ${colors.whitesmoke};
  flex: 1;
  padding: 5px 20px 10px 10px;
  line-height: 16px;
`;

export const StylendSendBtn = styled.button`
  ${mixins.smallButton};
  background-color: ${colors.chocolate};
  border: 1px solid ${colors.chocolate};
  color: ${colors.white};
  margin-left: 1em;

  &:hover,
  &:focus,
  &:active {
    background-color: ${colors.firebrick};
  }

  ${mixins.flexCenter};
`;

export const StyledNoComments = styled.h4`
  text-align: center;
  color: ${colors.darkslategray};
  font-weight: 600;
`;

export const StyledComments = styled.ul`
  border-radius: ${borderRadius};
  width: 100%;

  & li {
    ${mixins.flexLeft};
    align-items: inherit;
    margin-bottom: 10px;
  }

  & img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 8px;
  }
`;

export const StyledComment = styled.div`
  & h3,
  p {
    font-size: ${fontSizes.sm};
    font-weight: 500;
    line-height: 20px;
    text-transform: capitalize;
  }

  & p {
    color: ${colors.darkslategray};
    font-weight: 400;
    margin-bottom: 8px;
  }
`;

export const StyledDelete = styled.button`
  position: absolute;
  z-index: 99;
  border-radius: 25px 0px 0px 25px;
  padding: 8px 10px 8px 20px;
  background-color: ${colors.darkgray};
  bottom: 12px;
  right: 0;
  color: ${colors.lightGray};
  transition: ${transition};

  &:hover,
  &:focus,
  &:active {
    color: ${colors.white};
    box-shadow: ${shadows.url};
  }
`;
