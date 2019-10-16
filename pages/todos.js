import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import useTodoState from '../components/useTodoState';

const Todos = ({ todosData }) => {
  const { todos, addTodo, completeTodo, deleteTodo } = useTodoState(todosData);

  // add todo api
  const addTodoApi = todo => {
    fetch('http://localhost:3000/api/todo/add', {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(json => {
        addTodo(json);
        console.log('item is added', json);
      });
  };

  // delete todo api
  const deleteTodoApi = (todoIndex, todoId) => {
    fetch(`http://localhost:3000/api/todo/delete/${todoId}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(json => {
        deleteTodo(todoIndex);
        console.log('item is deleted', json);
      });
  };

  // complete todo api
  const completeTodoApi = (todoId, todo) => {
    fetch(`http://localhost:3000/api/todo/complete/${todoId}`, {
      method: 'PUT',
      body: JSON.stringify(todo),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(json => {
        console.log('todo status', json);
      });
  };

  const handleSubmit = itemValue => {
    const newItem = {
      name: itemValue,
      isCompleted: false,
    };

    // call the add todo api
    addTodoApi(newItem);
  };

  const handleDelete = (todoIndex, todoId) => {
    // call the delete todo api
    deleteTodoApi(todoIndex, todoId);
  };

  const handleCompleteTodo = (todoIndex, todoId, value) => {
    const newItem = {
      isCompleted: value,
    };

    completeTodo(todoIndex, value);

    // call the delete todo api
    completeTodoApi(todoId, newItem);
  };

  return (
    <Layout>
      <h1>Todos</h1>

      <TodoForm
        saveTodo={todoText => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            handleSubmit(trimmedText);
          }
        }}
      />
      <TodoList
        todos={todos}
        completeTodo={handleCompleteTodo}
        deleteTodo={handleDelete}
      />
    </Layout>
  );
};

Todos.getInitialProps = async ({ req }) => {
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
  const response = await fetch(`${baseUrl}/api/todos`);
  const todosData = await response.json();
  return { todosData };
};

export default Todos;
