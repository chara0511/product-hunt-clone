import { css } from "styled-components";
import theme from "./theme";

const { colors, fontSizes } = theme;

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  outline: css`
    outline: 1px solid red;
  `,

  // link: css`
  //   display: inline-block;
  //   text-decoration: none;
  //   text-decoration-skip-ink: auto;
  //   color: inherit;
  //   position: relative;
  //   transition: ${theme.transition};
  //   cursor: pointer;
  //   &:hover,
  //   &:active,
  //   &:focus {
  //     color: ${colors.green};
  //     outline: 0;
  //   }
  // `,

  smallButton: css`
    color: ${colors.black};
    background-color: transparent;
    border: 1px solid ${colors.lavender};
    border-radius: ${theme.borderRadius};
    margin-left: 0.5em;
    padding: 7px 13px;
    font-size: ${fontSizes.xs};
    font-weight: 600;
    line-height: 16px;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    transition: ${theme.transition};

    &:hover,
    &:focus,
    &:active {
      background-color: ${colors.lavender};
    }
  `,

  bigButton: css`
    color: ${colors.green};
    background-color: transparent;
    border: 1px solid ${colors.green};
    border-radius: ${theme.borderRadius};
    padding: 1.25rem 1.75rem;
    font-size: ${fontSizes.sm};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    &:hover,
    &:focus,
    &:active {
      background-color: ${colors.transGreen};
    }
    &:after {
      display: none !important;
    }
  `,

  boxShadow: css`
    box-shadow: 0 10px 30px -15px ${colors.lavender};
    transition: ${theme.transition};

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px ${colors.lavender};
    }
  `,
};

export default mixins;