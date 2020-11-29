import styled from 'styled-components';
import { theme } from '.';
import mixins from './mixins';

const { colors, borderRadius } = theme;

export const StyledForm = styled.form`
  max-width: 375px;
  width: 100%;
  margin: 0 auto;
  border: 1px solid ${colors.lightGray};
  border-radius: ${borderRadius};
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
    margin: 0 auto;
    width: 200px;
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
  width: 200px;
  left: 25%;
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
