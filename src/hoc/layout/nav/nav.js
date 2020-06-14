import React, { Component } from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { device } from 'themes/media';
import { CollapseButton } from 'components/UI';
import { NavLinks, NavLogo } from 'components/Nav';

const Navbar = styled.nav`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.palette.primary[0]};
  padding: ${({ theme }) => theme.padding.containerXS};

  @media ${device.sm} {
    padding: ${({ theme }) => theme.padding.containerSM};
  }

  @media ${device.md} {
    height: 6rem;
    padding: ${({ theme }) => theme.padding.containerMD};
  }

  @media ${device.lg} {
    height: 9rem;
    padding: ${({ theme }) => theme.padding.containerLG};
  }

  @media ${device.xl} {
    padding: ${({ theme }) => theme.padding.containerXL};
  }

  * {
    color: ${({ theme }) => theme.palette.font.primary};
  }
`;

const NavCollapse = styled(CollapseButton)`
  @media ${device.sm} {}

  @media ${device.md} {
    display: none;
  }

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

class Nav extends Component {
  state = {
    mobile: false,
  }

  collapseHandler = () => {
    this.setState((prevState) => ({ mobile: !prevState.mobile }));
  }

  render() {
    const { links, login } = this.props;
    const { mobile } = this.state;

    const mobileLinks = mobile ? (
      <div style={{
        height: '10rem', width: '10rem', backgroundColor: 'white', alignSelf: 'flex-start',
      }}
      />
    ) : null;
    const pcLinks = mobile ? null : <NavLinks links={links} login={login} />;

    return (
      <>
        <Navbar id="navbar">
          <NavCollapse className="nav-collapse" clicked={this.collapseHandler} />
          <NavLogo />
          {pcLinks}
        </Navbar>
        {mobileLinks}
      </>
    );
  }
}

Nav.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  })),
  login: PropTypes.bool,
};
Nav.defaultProps = {
  links: [], login: false,
};

export default Nav;
