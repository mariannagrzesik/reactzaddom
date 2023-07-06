import { ChangeEvent, FormEvent, useState } from "react"

type SingleProductType={
    title: string,
    brand: string,
    price: number
}



export const AddProduct = () => {
    const [product, setProduct] = useState<SingleProductType>({
        title: '',
        brand: '',
        price: 0
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
        const {name, value}=e.target;

        setProduct(prev=>({
            ...prev,
            [name]: value
        })) 
    }

    const createProduct = async()=>{
        try{
            const newProduct = await fetch('https://dummyjson.com/products/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(product)
              })
              if(!newProduct.ok) throw Error('something went wrong with adding user');
              const newProductJSON: SingleProductType = await newProduct.json();
              alert(`Pomyślnie dodano produkt ${newProductJSON.title}`)

        }
        catch(e){
            console.log(e)
        }
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        createProduct();
    }

    return(
        <div>
            <h2>DODAWANIE PRODUKTU</h2>
            <form onSubmit={handleSubmit}>
            <input type='text' id='title' name='title' value={product.title} onChange={handleChange}></input>
            <input type='text' id='brand' name='brand' value={product.brand} onChange={handleChange}></input>
            <input type='number' id='price' name='price' value={product.price} onChange={handleChange}></input>
            
            <button type='submit'>Dodaj produkt</button>
            </form>
        </div>
    )
}