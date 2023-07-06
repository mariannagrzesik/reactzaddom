import { useEffect, useState } from "react";
import { Product } from "../Product";

type ProductType = {
  id: number;
  title: string;
  brand: string;
  price: number;
  
};

export const ProductList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<ProductType[]>([]);

  //const tab = products.filter(item=>item.id===1)

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("https://dummyjson.com/products");
      if (!res.ok) throw Error("something wrong with response");

      const { products } = await res.json();
      setProducts(products);
      return products;
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };
const deleteProduct = async (id: number)=>{
    try{
        const res = await fetch(`https://dummyjson.com/products/${id}`, {
            method: 'DELETE',
          });
        if (!res.ok) throw Error('Something wrong with response')
        const deletedProduct = await res.json();
        console.log(`usunięto produkt ${deletedProduct.title}`);
        setProducts(prev=>[...prev.filter(el=>el.id!==id)]);
    }
            catch(e){
            console.log(e)

        }
    
}


  useEffect(() => {
    fetchProducts();
    
  }, []);

  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <>
      <h2>Lista</h2>
      {products.length > 0 && (
        <ul>
          {products.map((product) => (
            <Product key={product.id} deleteProduct={deleteProduct} {...product}  />
          ))}
        </ul>
      )}
    </>
  );
};