import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  todoCompleted: {
    textDecoration: 'line-through',
  },
});

const TodoList = ({ todos, completeTodo, deleteTodo }) => {
  const classes = useStyles();

  return (
    <List>
      {todos.map((todo, index) => (
        <ListItem key={index.toString()} dense button>
          <ListItemText
            primary={todo.name}
            className={todo.isCompleted ? classes.todoCompleted : ''}
          />
          <ListItemSecondaryAction>
            <IconButton
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
                  color="primary"
                />
              }
            />
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
