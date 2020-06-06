import { useState } from 'react';

export default initialValue => {
  const [todos, setTodos] = useState(initialValue);

  return {
    todos,
    addTodo: todoText => {
      setTodos([todoText, ...todos]);
    },

    completeTodo: todoIndex => {
      const newTodos = [...todos];
      newTodos[todoIndex].is_completed = !newTodos[todoIndex].is_completed;

      setTodos(newTodos);
    },

    deleteTodo: todoIndex => {
      const newTodos = todos.filter((_, index) => index !== todoIndex);

      setTodos(newTodos);
    },
  };
};
