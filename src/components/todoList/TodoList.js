import React from "react";
import "./TodoList.style.css";
import Todo from "./todo/Todo.js";

export default function TodoList(props) {
	const arr = props.todoData.map((data) => (
		<Todo key={data.id} data={data} handelChange={props.handelChange} />
	));
	return <div className="todo-list">{arr}</div>;
}
