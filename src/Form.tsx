import { useState } from "react";

const Form = ({ toDo, setToDo }) => {
  const [item, setItem] = useState("");
  const [id, setId] = useState(0);

  return (
    <div>
      <h1 className="h1 text-center mt-5">To Do List</h1>
      <div className="d-flex flex-column m-auto w-75">
        <input
          type="text"
          name=""
          id=""
          className="rounded-3 mt-3 px-3 py-2"
          placeholder="Enter to-do here..."
          onChange={(e) => setItem(e.target.value)}
        />
        <button
          type="submit"
          value="Add"
          className="btn btn-primary m-auto w-25 mt-2"
          onClick={() => {
            setToDo([...toDo, { id: id, toDo: item, isDone: false }]);
              setId(id + 1);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
