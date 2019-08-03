import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { ProviderImpl } from "../sendbird/ProviderImpl";
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme';

class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>The sun project</title>
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ProviderImpl>
            <Component {...pageProps} />
          </ProviderImpl>
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;