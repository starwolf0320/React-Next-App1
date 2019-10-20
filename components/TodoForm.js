import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import useInputState from '../utils/state/useInputState';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(4),
  },
  dense: {
    marginTop: 19,
  },
}));

const TodoForm = ({ saveTodo }) => {
  const { value, onChange, reset } = useInputState('');
  const classes = useStyles();

  return (
    <form
      className={classes.container}
      onSubmit={event => {
        event.preventDefault();

        saveTodo(value);
        reset();
      }}
    >
      <TextField
        fullWidth
        label="Title"
        className={classes.textField}
        placeholder="Todo"
        margin="normal"
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default TodoForm;
