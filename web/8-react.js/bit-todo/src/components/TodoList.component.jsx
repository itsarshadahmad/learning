export default function TodoList({ todoList, setTodoList }) {

	function handleCompletedTodo(event, index) {
		const updatedList = todoList.filter((value, i) => {
			return index !== i
		})
		
		setTimeout(() => {
			setTodoList(updatedList)
			event.target.checked = false
		}, 1000);
	}

	return (
		<div className="todo-items">
			{todoList.map((value, index) => {
				return (
					<div className="todo-item-checkbox" key={index}>
						<input type="checkbox"
							onChange={(e) => handleCompletedTodo(e, index)}
						/>
						<h3>{value}</h3>
					</div>
				);
			})}
		</div>
	);
}
