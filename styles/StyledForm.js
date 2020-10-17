import styled from "styled-components";
import media from "./media";
import mixins from "./mixins";

export const StyledForm = styled.form`
  max-width: 375px;
  width: 100%;
  margin: 0 auto;

  label {
    flex: 0 0 120px;

    ${media.mdTablet`
      flex: 0 0 150px;
    `}
  }

  input[type="text"],
  input[type="email"],
  input[type="password"] {
    flex: 1;
    padding: 0.5em;
  }
`;

export const StyledWrapper = styled.div`
  margin-bottom: 2em;

  ${mixins.flexCenter}
`;
