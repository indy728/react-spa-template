import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Nav from './nav/nav';
import Footer from './footer/footer';
import Content from './content/content';

class Layout extends Component {
  state = {

  }

  links = [
    { name: 'Indy', url: 'https://indy728.github.io' },
    { name: 'This Page', url: '/', active: true },
  ]

  render() {
    const { routeComponents, children } = this.props;

    console.log('[layout] children:; ', children);

    return (
      <>
        <Nav links={this.links} login />
        <Content
          routeComponents={routeComponents}
        >
          {children}
        </Content>
        <Footer links={this.links} />
      </>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element,
  routeComponents: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    component: PropTypes.element,
  })).isRequired,
};
Layout.defaultProps = {
  children: null,
};

export default Layout;
