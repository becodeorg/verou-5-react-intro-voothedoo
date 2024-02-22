const Todo = ({ todo }) => {
  return (
    <li>
      <input type="checkbox" name="check" id="check" />
      <label htmlFor="check">
        {todo.name} checked={todo.complete}
      </label>
    </li>
  );
};

export default Todo;
