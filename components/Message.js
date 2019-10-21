import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import { amber, green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const Message = ({ values, handleClose }) => {
  const classes = useStyles();

  return (
    <Snackbar
      //   className={classes[values.variant]}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={values.isOpen}
      autoHideDuration={2000}
      ContentProps={{
        'aria-describedby': 'message-id',
        classes: {
          root: classes[values.variant],
        },
      }}
      onClose={handleClose}
      message={<span id="message-id">{values.message}</span>}
    />
  );
};

export default Message;
