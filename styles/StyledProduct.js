import styled from "styled-components";
import { theme } from ".";
import media from "./media";
import mixins from "./mixins";

const { colors } = theme;

export const StyledTitle = styled.h1`
  text-align: center;
  padding: 1.25em 0;
`;

export const StyledForm = styled.form`
  max-width: 375px;
  width: 100%;
  margin: 0 auto;

  & fieldset {
    border: 1px solid #e1e1e1;
  }
`;

export const StyledWrapper = styled.div`
  height: 5em;
  position: relative;

  & label {
    flex: 0 0 120px;

    ${media.mdTablet`
      flex: 0 0 150px;
    `}
  }

  & input[type="text"],
  & input[type="email"],
  & input[type="password"],
  & textarea {
    flex: 1;
    padding: 0.5em;
  }

  ${mixins.flexLeft}
`;

export const StyledInput = styled.input`
  ${mixins.link}
`;

export const StyledErrorMessage = styled.div`
  left: 120px;
  bottom: 0;
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
