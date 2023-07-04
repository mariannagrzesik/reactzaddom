import { useState } from "react";
import "./Modal.scss";

export const Modal = () => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<button onClick={handleOpen}>Pokaz Modal</button>
			<button onClick={handleClose}>Zamknij Modal</button>
			{open && (
				<div>
					<h2>MODAL</h2>
				</div>
			)}
		</>
	);
};
