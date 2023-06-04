import { useState } from "react";

export default function TodoForm({ todoList, setTodoList }) {
	const [todoValue, setTodoValue] = useState("");

	function handleAddButton() {
		setTodoList([...todoList, todoValue])
		setTodoValue("")
	}

	function handleKeyboardEvent(event) {
		if (event.code === "Enter" || event.code === "NumpadEnter") {
			handleAddButton()
		}
	}

	return (
		<div className="add-todo-form">
			<input
				type="text"
				placeholder="Enter Todo"
				value={todoValue}
				onChange={(e) => setTodoValue(e.target.value)}
				onKeyDown={handleKeyboardEvent}
			/>
			<button onClick={handleAddButton}>Add</button>
		</div>
	);
}
