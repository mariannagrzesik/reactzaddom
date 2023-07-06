import { useEffect, useState } from "react";
import { UpdateProductForm } from "../UpdateProductForm";

type ProductProps = {
	id: number;
	title: string;
	brand: string;
	price: number;
	deleteProduct: (id: number) => void;
};

export const Product = ({
	id,
	title,
	brand,
	price,
	deleteProduct,
}: ProductProps) => {
	//const callbackDeleteProduct =()=> deleteProduct(id);
	const [isReadOnly, setIsReadOnly] = useState(true);

	const toggleReadOnly = () => setIsReadOnly((prev) => !prev);
	return (
		<li>
			{isReadOnly ? (
				<span>{title}</span>
			) : (
				<UpdateProductForm title={title} brand={brand} price={price} id={id}/>
			)}

			<button onClick={() => deleteProduct(id)}>Usuń</button>
			{isReadOnly&&<button onClick={toggleReadOnly}>Edytuj</button>}
		</li>
	);
};
