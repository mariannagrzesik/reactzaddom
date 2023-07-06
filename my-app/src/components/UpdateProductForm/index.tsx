import { ChangeEvent, FormEvent, useState } from "react";

type SingleProductType = {
    id: number,
	title: string,
	brand: string,
	price: number,
};

export const UpdateProductForm = (props: SingleProductType) => {
	const [product, setProduct] = useState<SingleProductType>(props);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setProduct((prev) => ({
			...prev,
			[name]: value,
		}));
	};
	const updateProduct = async () => {
        
        try{
            const res = await fetch(`https://dummyjson.com/products/${props.id}`, {
                method: 'PUT', /* or PATCH */
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(product)
              });
            if(!res.ok) throw Error('something wrong with response');
            const resJSON=res.json();
            console.log(resJSON);
        }
        catch(e){
            console.log(e)
        }
    };

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
        updateProduct();
	};

	return (
		<div>
			<h2>EDYTOWANIE PRODUKTU</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					id="title"
					name="title"
					value={product.title}
					onChange={handleChange}
				></input>
				<input
					type="text"
					id="brand"
					name="brand"
					value={product.brand}
					onChange={handleChange}
				></input>
				<input
					type="number"
					id="price"
					name="price"
					value={product.price}
					onChange={handleChange}
				></input>

				<button type="submit">Zaktualizuj produkt</button>
			</form>
		</div>
	);
};
