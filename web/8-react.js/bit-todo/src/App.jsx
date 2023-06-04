import { useState } from "react";
import TodoForm from "./components/TodoForm.component";
import TodoList from "./components/TodoList.component";
import "./App.style.scss"

function App() {
	const [todoList, setTodoList] = useState([])

	return (
		<div>
			<h1 className="logo">Bit-Todo</h1>
			<TodoForm todoList={todoList} setTodoList={setTodoList} />
			<TodoList todoList={todoList} setTodoList={setTodoList} />
		</div>
	);
}

export default App;
