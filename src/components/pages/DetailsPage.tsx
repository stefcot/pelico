import {FC, useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {Product} from "../../types";
import {useCart} from "../store";

const DetailsPage: FC = ({}) => {
    console.log('DetailsP::render')
    const { dispatch } = useCart()
    const { productId } = useParams()
    const [product, setProduct] = useState<Product>()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res=> res.json()
            ).then(json=>setProduct(json))
    }, []);

    if(!product) return <div>Loading ....</div>

    return <div>
        <h1>Details pour le produit {product.title
        }</h1>
        <section>
            <img src={product.image} alt={product.title}/>
            <h4>{product.description}</h4>
            <p>{product.price}</p>
            <footer>
                <button onClick={() => {
                    dispatch({type: 'add', payload:product })
                }}>
                    Ajouter au cart
                </button>
            </footer>
        </section>
    </div>
}

export default DetailsPage
