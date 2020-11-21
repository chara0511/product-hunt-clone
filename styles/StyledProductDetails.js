import styled from "styled-components";
import { theme } from ".";
import mixins from "./mixins";

const { borderRadius, colors } = theme;

export const StyledProductDetails = styled.li`
  background-color: ${colors.white};
  border-radius: ${borderRadius};
  padding: 1rem;
  ${mixins.flexBetween};
  max-width: 600px;
  margin-bottom: 1rem;
`;

export const StyledContent = styled.div`
  flex: 0 1 600px;
  display: grid;
  grid-template-columns: 200px 1fr;
  column-gap: 1.5rem;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledDescription = styled.div`
  h2,
  p {
    margin: 1rem 0;
  }
`;

export const StyledComments = styled.div`
  background-color: ${colors.whitesmoke};
  border-radius: ${borderRadius};
  max-width: 150px;
  width: 100%;
  padding: 0.25rem 0.5rem;
  margin: 1rem 0;
  ${mixins.flexBetween};
`;

export const StyledVotes = styled.div`
  ${mixins.flexBetween};
  margin: 1rem 0;
  max-width: 300px;
  width: 100%;
`;
