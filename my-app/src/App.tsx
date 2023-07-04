import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Button } from "./components/Button";
import { Counter } from "./components/Counter";
import { InputField } from "./components/InputField";
import { TodoList } from "./components/TodoList";
import { Toggle } from "./components/Toggle";
import { List } from "./components/List";
import { Timer } from "./components/Timer";
import { Dropdown, DropdownItem } from "./components/Dropdown";
import { Modal } from "./components/Modal";

function App() {
	const headerList = "Lista przekazywanna jako propsy";
	const list = ["cos", "tam", "nie", "mam", "pomyslu"];
	const arrayDropdown: DropdownItem[] = [
		{ id: 1, title: "audi" },
		{ id: 2, title: "mercedes" },
		{ id: 3, title: "opel" },
	];

	const listProp = {
		header: headerList,
		list,
	};

	return (
		<div className="App">
			<Button />
			<Counter />
			<InputField />
			<TodoList />
			<Toggle />
			<List {...listProp} />
			{/* <Timer seconds={10} /> */}
			<Dropdown array={arrayDropdown} />
      <Modal />
		</div>
	);
}

export default App;
