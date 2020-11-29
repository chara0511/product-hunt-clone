import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import mixins from './mixins';

import theme from './theme';

const { colors } = theme;

const StyledLink = ({ as, children, className, href }) => {
  return (
    <Link href={href} as={as} passHref>
      <a className={className}>{children}</a>
    </Link>
  );
};

StyledLink.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  href: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export default styled(StyledLink)`
  background-color: ${({ chocolate }) => chocolate && colors.chocolate};
  color: ${({ chocolate }) => chocolate && colors.white};

  ${mixins.smallButton}

  :hover {
    background-color: ${({ chocolate }) => chocolate && colors.firebrick};
  }
`;
