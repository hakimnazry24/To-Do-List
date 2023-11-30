const List = ({ toDo, setToDo }) => {
  let todos = [...toDo];
  return (
    <>
      <ul className="list-group w-75 m-auto mt-5">
        {todos.map((todo, index) => (
          <div>
            {todo.toDo !== "" && (
              <li
                className="list-group-item list-group-item-primary"
                key={index}
              >
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="me-2"
                  onChange={() => setToDo([...toDo, { ...todo, isDone: true }])}
                />
                {todo.toDo}
                {todo.isDone && (
                  <button className="btn btn-danger float-end">Delete</button>
                )}
              </li>
            )}
          </div>
        ))}
      </ul>
    </>
  );
};

export default List;
