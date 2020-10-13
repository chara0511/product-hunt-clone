import Link from "next/link";
import styled from "styled-components";
import { mixins } from "./";
import theme from "./theme";

const { colors } = theme;

const StyledLink = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
);

export default styled(StyledLink)`
  ${mixins.smallButton}

  background-color: ${({ chocolate }) => chocolate && colors.chocolate};
  color: ${({ chocolate }) => chocolate && colors.white};

  :hover {
    background-color: ${({ chocolate }) => chocolate && colors.firebrick};
  }
`;
