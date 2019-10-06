import fetch from 'isomorphic-unfetch';

import Layout from './components/layout';

function Todos({ todos }) {
  return (
    <Layout>
      <h1>Todos</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
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
