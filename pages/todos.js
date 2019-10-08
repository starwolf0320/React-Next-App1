import fetch from 'isomorphic-unfetch';

import Layout from './components/layout';
import TodoItem from './components/todoItem';

function Todos({ todos }) {
  return (
    <Layout>
      <h1>Todos</h1>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </Layout>
  );
}

Todos.getInitialProps = async () => {
  const response = await fetch('http://localhost:3000/api/todos');
  const todos = await response.json();
  console.log(todos);

  return { todos };
};

export default Todos;
