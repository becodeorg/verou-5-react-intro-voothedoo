const Main = () => {
  return (
    <main>
      <form action="">
        <input type="text" id="addTodo" placeholder="Add a task" />
        <div className="buttons">
          <button className="btn add">Add</button>
          <button className="btn clear">Clear complete</button>
        </div>
      </form>
      <br />
      <section className="todoList">
        <ul>
          <li>
            <input type="checkbox" name="check" id="check" />
            <label htmlFor="check">Todo example example </label>
          </li>
          <li>
            <input type="checkbox" name="check" id="check" />
            <label htmlFor="check">Todo Example</label>
          </li>
          <li>
            <input type="checkbox" name="check" id="check" />
            <label htmlFor="check">Todo Example</label>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Main;
