const addToDo = document.querySelector(".add-todo");
const toDoGrid = document.querySelector(".todo-grid");

addToDo.addEventListener("click", () => {
	const checkTodo = document.createElement("button");
	checkTodo.className = "check-todo";
	checkTodo.textContent = "✓";
	checkTodo.addEventListener("click", (e) => {
		const item = e.target.parentElement;
		toDoGrid.removeChild(item);
	});

	const toDoTopic = document.createElement("input");
	toDoTopic.type = "text";
	toDoTopic.className = "todo-topic";
	toDoTopic.id = "todo-topic-element";

	const toDoText = document.createElement("input");
	toDoText.type = "text";
	toDoText.className = "todo-text";
	toDoText.placeholder = "take a Note";
	toDoText.maxLength = 24;
	toDoText.id = "todo-text-element";

	const toDoContainer = document.createElement("div");
	toDoContainer.className = "todo-text-container";
	toDoContainer.appendChild(toDoTopic);
	toDoContainer.appendChild(toDoText);

	const todoElement = document.createElement("div");
	todoElement.className = "todo-element";
	todoElement.appendChild(checkTodo);
	todoElement.appendChild(toDoContainer);

	toDoGrid.insertAdjacentElement("beforeend", todoElement);
});
