import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Main from 'components/Home';
import ContentTemplate from '../templates/contentTemplate';

const Wrapper = styled(ContentTemplate)`
  flex: 1;
`;

const home = (props) => {
  const { routeComponents } = props;

  return (
    <Wrapper className="home">
      <Main />
    </Wrapper>
  );
};

home.propTypes = {
  routeComponents: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default home;
