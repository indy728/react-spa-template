import React, { Component } from 'react';
import {
  Route, Switch, withRouter, Redirect,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home/Home';
import Layout from './hoc/layout/layout';
import theme from './themes/default';
import GlobalStyle from './GlobalStyle';

class App extends Component {
  componentDidMount() {
  }

  render() {
    const routeComponents = [
      { name: 'Home', component: Home },
    ];
    const routes = (
      <Switch>
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    );
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle palette={theme.palette} />
        <Layout routeComponents={routeComponents}>
          {routes}
        </Layout>
      </ThemeProvider>
    );
  }
}

export default withRouter((App));
