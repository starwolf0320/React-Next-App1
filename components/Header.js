import React from 'react';

import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.down('md')]: {
      fontSize: '0.90rem',
    },
  },
  menuLinks: {
    listStyle: 'none',
    '& li': {
      display: 'inline-block',
      marginRight: 10,
      '& a': {
        color: '#fff',
        textDecoration: 'none',
      },
    },
  },
  homeIcon: {
    marginRight: 10,
  },
  titleLink: {
    textDecoration: 'none',
    color: '#fff',
  },
}));

const HomeIcon = props => {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
};

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <HomeIcon
            className={classes.homeIcon}
            aria-label="menu"
            color="inherit"
            edge="start"
          />
          <Typography variant="h6" className={classes.title}>
            <Link href="/">
              <a className={classes.titleLink}>React Next Application</a>
            </Link>
          </Typography>
          <ul className={classes.menuLinks}>
            <li>
              <Link href="/home">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/todos">
                <a>Todos</a>
              </Link>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
