import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { device } from 'themes/media';

const Wrapper = styled.div`
  padding: 2rem 2rem;

  @media ${device.sm} {}

  @media ${device.md} {}

  @media ${device.maxLg} {
    display: none;
  }

  @media ${device.lg} {
    flex: 1;
    border-right: 2px solid ${({ theme }) => theme.palette.primary[0]};
  }

  @media ${device.xl} {}
`;

const SideNavList = styled.ul`
  width: 27.5rem;  
`;

const SideNavButton = styled.li`
  width: 100%;
  height: 5rem;
  margin: .2rem;
  justify-content: center;

  color: ${({ theme }) => theme.palette.grayscale};
  font-size: 125%;
  font-weight: 600;
  /* text-decoration: underline; */
  text-transform: uppercase;
  
  transition: ${({ theme }) => theme.transition.shrink};
  animation: moveInRight 1.1s linear;
  animation-delay: ${({ delay }) => `${delay}ms`};

  :hover {
    background-color: ${({ theme }) => theme.palette.grayscale};
    color: ${({ theme }) => theme.palette.font.primary};
    border: .5px outset;
    transform: scale(1.1) translateY(-.5rem);
  }
`;

const SideNav = (props) => {
  const { sideNavItems } = props;

  const sideNavButtons = sideNavItems.map((sideNavLink, i) => (
    <SideNavButton
      key={sideNavLink.name}
      delay={i * 150}
    >
      <NavLink
        to={sideNavLink.path}
        activeClassName="side-nav__active"
      >
        {sideNavLink.name}
      </NavLink>
    </SideNavButton>
  ));

  return (
    <Wrapper>
      <SideNavList>
        {sideNavButtons}
      </SideNavList>
    </Wrapper>
  );
};

SideNav.propTypes = {
  sideNavItems: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default SideNav;
