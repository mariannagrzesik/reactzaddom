import { ChangeEvent, useState } from "react";
import "./Dropdown.scss";

type DropdownProps = {
	array: DropdownItem[];
};
export type DropdownItem = {
	id: number;
	title: string;
};

export const Dropdown = ({ array }: DropdownProps) => {
	const [text, setText] = useState("");

	const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setText(event.target.value);
	};

	return (
		<div>
			<select onChange={handleChange} value={text}>
				{array.map((item) => (
					<option value={item.title} id={`${item.id}`} key={item.id}>
						{item.title}
					</option>
				))}
			</select>
			<span>WYBRANA WARTOŚĆ: {text}</span>
		</div>
	);
};
