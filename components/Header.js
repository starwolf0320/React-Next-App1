import React from 'react';

import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
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
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Todo Application
          </Typography>
          <ul className={classes.menuLinks}>
            <li>
              <Link href="/todos">
                <a>Todos</a>
              </Link>
            </li>
            <li>
              <Link href="/home">
                <a>Home</a>
              </Link>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
