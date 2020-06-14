import React from 'react';
import styled from 'styled-components';
import Main from 'components/Home';
import { device } from 'themes/media';
import { SideNav } from 'components/UI';
import ContentTemplate from '../templates/contentTemplate';

const Wrapper = styled(ContentTemplate)`
  flex: 1;
`;

const BreadCrumbs = styled.div`
  @media ${device.lg} {
    flex: 1;
    border-left: 2px solid ${({ theme }) => theme.palette.primary[0]};
  }

  @media ${device.maxLg} {
    display: none;
  }
`;

const basicPage = () => {
  const sideNavLinks = [];
  for (let i = 0; i < 10; i += 1) sideNavLinks.push(`Item ${i}`);

  return (
    <Wrapper className="basic-page">
      <SideNav sideNavItems={sideNavLinks} />
      <Main />
      <BreadCrumbs />
    </Wrapper>
  );
};

export default basicPage;
