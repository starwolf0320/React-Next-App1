import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    overflow: 'auto',
    maxHeight: 700,
  },
  todoItemBg: {
    backgroundColor: '#fff',
    borderRadius: 25,
    marginBottom: 10,
  },
  todoCompleted: {
    textDecoration: 'line-through',
  },
  emptyTodos: {
    padding: theme.spacing(3, 2),
  },
}));

const TodoList = ({ todos, completeTodo, deleteTodo }) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {todos.length > 0 ? (
        todos.map((todo, index) => (
          <ListItem key={index.toString()} className={classes.todoItemBg} dense>
            <ListItemText
              primary={todo.name}
              className={todo.isCompleted ? classes.todoCompleted : ''}
            />
            <ListItemSecondaryAction>
              <IconButton
                color="secondary"
                aria-label="Delete"
                onClick={() => {
                  deleteTodo(index, todo._id);
                }}
              >
                <DeleteOutlineIcon />
              </IconButton>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={todo.isCompleted}
                    onChange={() => {
                      completeTodo(index, todo._id, !todo.isCompleted);
                    }}
                    color="secondary"
                  />
                }
              />
            </ListItemSecondaryAction>
          </ListItem>
        ))
      ) : (
        <Paper className={classes.emptyTodos}>
          <Typography component="p">There is no todos yet!</Typography>
        </Paper>
      )}
    </List>
  );
};

export default TodoList;
