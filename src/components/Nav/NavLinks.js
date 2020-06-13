import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { device } from 'themes/media';
import { FlexSpacer } from 'components/UI';
import SiteLinkButton from './SiteLinkButton';

const Wrapper = styled.div`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  position: absolute;
  bottom: 0;
  left: 0;

  @media ${device.sm} {}

  @media ${device.md} {
    width: 100%;
    margin-left: 4rem;
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    animation: moveInBottom 1s ease-out;

    ul {
      flex-direction: row;
      flex-wrap: nowrap;
    }
  }

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

const LoginButton = styled.span`
  flex-direction: row;
  color: white;
  height: 100%;
`;

const NavLinks = (props) => {
  const { links, login, show } = props;

  const siteLinks = links.map((link) => (
    <SiteLinkButton
      key={`${link.name}`}
      href={link.url}
      linkName={link.name}
      active={link.active}
    />
  ));
  const authButton = login
    ? (
      <LoginButton>
        <FontAwesomeIcon icon={faSignInAlt} />
        &nbsp;Sign In
      </LoginButton>
    ) : null;

  return (
    <Wrapper show={show}>
      <ul>
        {siteLinks}
      </ul>
      <FlexSpacer />
      {authButton}
    </Wrapper>
  );
};

NavLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  })),
  login: PropTypes.bool,
  show: PropTypes.bool,
};
NavLinks.defaultProps = {
  links: [], login: false, show: false,
};

export default NavLinks;
