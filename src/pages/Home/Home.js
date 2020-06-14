import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Main from 'components/Home';
import { device } from 'themes/media';
import { SideNav } from 'components/UI';
import ContentTemplate from '../templates/contentTemplate';

const Wrapper = styled(ContentTemplate)`
  flex: 1;
`;

// const SideNavList = styled.

const BreadCrumbs = styled.div`
  @media ${device.lg} {
    flex: 1;
    border-left: 2px solid ${({ theme }) => theme.palette.primary[0]};
  }

  @media ${device.maxLg} {
    display: none;
  }
`;

const home = (props) => {
  const { routeComponents } = props;
  const sideNavLinks = [];
  for (let i = 0; i < 10; i += 1) sideNavLinks.push(`Item ${i}`);

  return (
    <Wrapper className="home">
      <SideNav sideNavItems={routeComponents} />
      <Main />
      <BreadCrumbs>
        {/* <Temp /> */}
      </BreadCrumbs>
    </Wrapper>
  );
};

home.propTypes = {
  routeComponents: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default home;
