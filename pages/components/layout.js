import Link from 'next/link';

const Layout = props => (
  <div className="layout">
    <ul>
      <li>
        <Link href="/todos">
          <a>Todos</a>
        </Link>
      </li>
      <li>
        <Link href="/home">
          <a>Home</a>
        </Link>
      </li>
    </ul>
    {props.children}
  </div>
);

export default Layout;
