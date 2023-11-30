import Form from "./Form"
import {useState} from "react"
import List from "./List";

const App = () => {
    const [toDo, setToDo] = useState([]);
  return (
    <div>
        <Form toDo={toDo} setToDo={setToDo}></Form>
        <List toDo={toDo} setToDo={setToDo}></List>
    </div>
  )
}

export default App