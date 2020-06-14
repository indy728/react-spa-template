import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from 'themes/media';
import content from 'hoc/layout/content/content';

const Wrapper = styled.div`
  width: 100%;
  min-height: inherit;
  background-color: ${({ theme }) => theme.palette.white};
  align-items: normal;
  flex-flow: row;

  @media ${device.sm} {
  }

  @media ${device.md} {
  }

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

const contentTemplate = (props) => {
  const {
    className, children, nav1, nav2,
  } = props;

  return (
    <Wrapper className={className}>
      {/* {nav1} */}
      {children}
      {/* {nav2} */}
    </Wrapper>
  );
};

contentTemplate.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  // nav1: PropTypes.element,
  // nav2: PropTypes.element,
};
// contentTemplate.defaultProps = {
//   nav1: null,
//   nav2: null,
// };

export default contentTemplate;
