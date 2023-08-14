import { writable } from 'svelte/store';

// Create a writable store named 'todos' and initialize it with an empty array
export const todos = writable([]);

export const name = writable('Svelte');

export const addTodo = (text) => {
	todos.update((currentArray) => {
		// Create a new array with the existing todos and the new todo item
		const newTodos = [...currentArray, { text, completed: false, id: Date.now() }];
		return newTodos;
	});
};

export const deleteTodo = (id) => {
	todos.update((todos) => todos.filter((todo) => todo.id !== id));
};

// Define a function 'toggleTodoCompleted' to toggle the completed status of a todo item by its ID
export const toggleTodoCompleted = (id) => {
	todos.update((todos) => {
		let index = -1;

		// Find the index of the todo item with the specified ID
		for (let i = 0; i < todos.length; i++) {
			if (todos[i].id === id) {
				index = i;
				break;
			}
		}

		// Toggle the 'completed' property of the todo item if found
		if (index !== -1) {
			todos[index].completed = !todos[index].completed;
		}

		return todos;
	});
};
