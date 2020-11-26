import styled from 'styled-components';
import { theme } from '.';
import media from './media';
import mixins from './mixins';

const { colors, borderRadius } = theme;

export const StyledForm = styled.form`
  max-width: 375px;
  width: 100%;
  margin: 0 auto;

  & fieldset {
    border: 1px solid #e1e1e1;

    &:last-of-type {
      height: 110px;
      margin: 0.5em 0;
    }
  }
`;

export const StyledWrapper = styled.div`
  height: 5em;
  position: relative;

  & input,
  & textarea {
    display: block;
    width: 100%;
    padding: 0.5em;
    line-height: 18px;
    background-color: ${colors.white};
    border-radius: ${borderRadius};
  }
`;

export const StyledInput = styled.input`
  ${mixins.link}
`;

export const StyledErrorMessage = styled.div`
  position: absolute;
  color: ${colors.firebrick};
  display: flex;
  align-items: center;

  & svg {
    width: 20px;
    height: 20px;
    margin-right: 5px;
    fill: ${colors.firebrick};
  }

  ${media.mdTablet`
      left: 150px;
  `}
`;
