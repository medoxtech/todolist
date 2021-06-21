import "./App.css";
import React, { Component } from "react";
import TodoList from "./components/todoList/TodoList.js";
import todosData from "./todoData.js";

class App extends Component {
	constructor() {
		super();
		this.state = {
			todoData: todosData,
		};
	}

	handelChange = (id) => {
		console.log(id);
		this.setState((prestate) => {
			const newTodoData = prestate.todoData.map((data) => {
				if (data.id === id) {
					return {
						...data,
						completed: !data.completed,
					};
				}
				return data;
			});
			return {
				todoData: newTodoData,
			};
		});
	};

	render() {
		return (
			<div className="App">
				<TodoList
					todoData={this.state.todoData}
					handelChange={this.handelChange}
				/>
			</div>
		);
	}
}

export default App;
