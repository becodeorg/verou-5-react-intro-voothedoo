import Todo from "./Todo";

const Main = ({ todos, addTodo, addTodoRef }) => {
  return (
    <main>
      <form action="">
        <input
          ref={addTodoRef}
          type="text"
          id="addTodo"
          placeholder="Add a task"
        />
        <div className="buttons">
          <button onClick={addTodo} className="btn add">
            Add
          </button>
          <button className="btn clear">Clear complete</button>
        </div>
      </form>
      <br />
      <section className="todoList">
        <ul>
          {todos.map((todo) => {
            return <Todo key={todo.id} todo={todo} />;
          })}
        </ul>
      </section>
    </main>
  );
};

export default Main;
