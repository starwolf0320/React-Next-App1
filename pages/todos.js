import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import useTodoState from '../components/useTodoState';

const Todos = ({ todosData }) => {
  const { todos, addTodo } = useTodoState(todosData);

  // add todo api
  const addTodoApi = item => {
    fetch('http://localhost:3000/api/todo/add', {
      method: 'POST',
      body: JSON.stringify(item),
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

  const handleSubmit = itemValue => {
    const newItem = {
      name: itemValue,
      isCompleted: false,
    };

    // call the add todo api
    addTodoApi(newItem);
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
      <TodoList todos={todos} />
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
