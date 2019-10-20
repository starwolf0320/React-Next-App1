import React from 'react';

import App from 'next/app';

import { ThemeProvider } from '@material-ui/styles';
import 'react-notifications-component/dist/theme.css';
import 'react-notifications-component/dist/scss/notification.scss';

import theme from '../utils/theme';

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;
