import styled from 'styled-components';

import mixins from './mixins';
import theme from './theme';

const { fontSizes, borderRadius, colors } = theme;

export const StyledProductDetails = styled.li`
  background-color: ${colors.white};
  border-radius: ${borderRadius};
  padding: 20px 104px 20px 20px;
  ${mixins.flexBetween};
  max-width: 1100px;
  border-bottom: 1px solid ${colors.lavender};
  position: relative;
  margin: 0 auto;
`;

export const StyledContent = styled.div`
  flex: 0 1 600px;
  display: grid;
  grid-template-columns: 80px 1fr;
  column-gap: 0.5rem;
`;

export const StyledImage = styled.img`
  width: 80px;
  height: 80px;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledDescription = styled.div`
  margin-bottom: 10px;

  h3 {
    font-size: ${fontSizes.md};
    line-height: 24px;
    font-weight: 600;
    font-variant: tabular-nums;
    cursor: pointer;
    text-transform: capitalize;
  }

  p {
    font-size: ${fontSizes.sm};
    line-height: 20px;
    font-weight: 600;
    color: ${colors.gray};
  }
`;

export const StyledMeta = styled.div`
  ${mixins.flexLeft};
`;

export const StyledComments = styled.div`
  border-radius: ${borderRadius};
  width: 28px;
  padding: 0 8px;
  padding: 0.25rem 0.5rem;
  ${mixins.flexBetween};
  border: 1px solid ${colors.lavender};
  margin-right: 8px;

  & span {
    line-height: 16px;
  }
`;

export const StyledTopic = styled.div`
  font-size: ${fontSizes.xs};
  line-height: 16px;
  font-variant: tabular-nums;
`;

export const StyledVotes = styled.div`
  position: absolute;
  max-width: 46px;
  width: 100%;
  top: 20px;
  right: 20px;
  border: 1px solid ${colors.lavender};
  ${mixins.flexCenter};
  border-radius: ${borderRadius};
  flex-direction: column;
  height: 74px;
  padding: 0px 8px;
`;
