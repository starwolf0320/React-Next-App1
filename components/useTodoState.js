import { useState } from 'react';

export default initialValue => {
  const [todos, setTodos] = useState(initialValue);

  return {
    todos,
    addTodo: todoText => {
      setTodos([...todos, todoText]);
    },

    completeTodo: todoIndex => {
      const newTodos = [...todos];
      newTodos[todoIndex].isCompleted = !newTodos[todoIndex].isCompleted;

      setTodos(newTodos);
    },

    deleteTodo: todoIndex => {
      const newTodos = todos.filter((_, index) => index !== todoIndex);

      setTodos(newTodos);
    },
  };
};
