import "./Todo.style.css";
import React from "react";

export default function Todo(props) {
	return (
		<div className="todo-item">
			<input
				type="checkbox"
				checked={props.data.completed}
				onChange={() => {
					props.handelChange(props.data.id);
				}}
			/>
			<h3 className={props.data.completed ? "" : "completed"}>
				{props.data.text}
			</h3>
		</div>
	);
}
