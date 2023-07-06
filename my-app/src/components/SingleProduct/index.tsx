import { useEffect, useState } from "react";
import "./SingleProduct.scss";
type ProductType = {
	id: number;
	title: string;
	brand: string;
	price: number;
};

export const SingleProduct = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [product, setProduct] = useState<ProductType>();
	const fetchProduct = async () => {
		try {
			const res = await fetch("https://dummyjson.com/products/1");
			if (!res.ok) throw Error("something went wrong with response");

			const singleItem = await res.json();
			console.log(singleItem);
			setProduct(singleItem);
			return singleItem;
		} catch (e) {
			console.log(e);
		} finally {
			setIsLoading(false);
		}
	};
	useEffect(() => {
		fetchProduct();
	}, []);
	return (
		<div>
			<h2>POJEDYŃCZY PRODUKT</h2>
			{isLoading ? (
				<h2>Loading...</h2>
			) : (
				<h3>
					{product?.brand} kosztuje {product?.price}
				</h3>
			)}
		</div>
	);
};
