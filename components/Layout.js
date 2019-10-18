import React from 'react';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './Header';

const Layout = props => (
  // React Fragment
  <>
    <CssBaseline />
    <Header />
    <Container maxWidth="sm">{props.children}</Container>
  </>
);

export default Layout;
