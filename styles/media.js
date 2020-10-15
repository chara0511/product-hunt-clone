import { css } from "styled-components";

const sizes = {
  lgDesktop: 1440,
  mdDesktop: 1280,
  smDesktop: 1024,
  lgTablet: 768,
  mdTablet: 600,
  smPhone: 374,
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;

  // console.log(emSize);
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `;

  return accumulator;
}, {});

export default media;
