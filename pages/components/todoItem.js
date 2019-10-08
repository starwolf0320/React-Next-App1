const todoItem = ({ todo }) => (
  <div className="todo-box">
    <p>{todo.name}</p>
    <button>Delete</button>
    <button>Done</button>
  </div>
);

export default todoItem;
