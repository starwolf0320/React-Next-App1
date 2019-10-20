import React from 'react';

import NextHead from 'next/head';

import theme from '../utils/theme';

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || ''}</title>
    <meta name="description" content={props.description} />
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
    />
    <meta name="theme-color" content={theme.palette.primary.main} />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
    <link rel="icon" type="image/ico" href="../static/favicon.ico" />
  </NextHead>
);

export default Head;
