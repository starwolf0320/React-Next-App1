import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

const Index = ({ todos }) => (
  <div>
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.name}</li>
      ))}
    </ul>

    <Link href="/test">
      <a>Test</a>
    </Link>
  </div>
);

Index.getInitialProps = async () => {
  const response = await fetch('http://localhost:3000/api/todo');
  const todos = await response.json();
  console.log(todos);

  return { todos };
};

export default Index;
