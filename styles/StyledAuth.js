import styled from 'styled-components';
import { theme } from '.';
import mixins from './mixins';

const { colors } = theme;

export const StyledTitle = styled.h1`
  text-align: center;
  padding: 1.25em 0;
`;

export const StyledForm = styled.form`
  max-width: 375px;
  width: 100%;
  margin: 0 auto;
`;

export const StyledWrapper = styled.div`
  height: 5em;
  position: relative;
  margin: 0.5em 0;

  input {
    display: block;
    width: 100%;
    padding: 0.5em 2.4em;
    line-height: 18px;
  }

  input[type='submit'] {
    display: block;
    width: 100px;
    margin: auto;
  }
`;

export const StyledInput = styled.input`
  ${mixins.link}
`;

export const StyledErrorMessage = styled.div`
  left: 0.5em;
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
`;
