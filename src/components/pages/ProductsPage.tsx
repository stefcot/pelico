import {FC, useEffect, useState} from 'react'
import {Product} from "../../types";
import {Link} from "react-router-dom";

const ProductsPage: FC = () => {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=> res.json()
            ).then(json=>setProducts(json))
    }, [])

    return (
        <main>
        <h1>ProductsPage</h1>
            <div>
        {products.map(({title, description, image, price, id}) => (
            <Link to={`/products/${id}`}>
            <article>
                <h3>{title}</h3>
                <img src={image} alt={title} />
                <h4>{description}</h4>
                <p>{price}</p>
            </article></Link>
            ))}
        </div>
        </main>
    )
}

export default ProductsPage

