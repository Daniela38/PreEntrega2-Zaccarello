import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import products from './data/products';
import ItemDetail from './ItemDetail';
import ItemCount from './ItemCount/ItemCount';
import { useContext } from 'react';
import { cartContext } from '../context/cartContext';
import {getSingleItem} from "../services/firestore";

function getSingleItem_(idURL){
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            const itemRequested = products.find( item => {
                return (item.id === Number(idURL))
            })
            resolve(itemRequested)
        }, 1000);
    })
    return promesa
}

export default function ItemDetailContainer() {
    const [product, setProduct] = useState([]);
    let {id} = useParams();
    const { addItem, getCountInCart } = useContext(cartContext);

    useEffect(() => {
        getSingleItem_(id).then((respuesta) => {
            setProduct(respuesta);
        });
    }, [id])

    function handleAddToCart(count){
        addItem(product, count);
        console.log("Agregado al carrio!");
    }

    const countInCart = getCountInCart(product.id);

    return (
        <div>
            <ItemDetail products={product}/>
            <ItemCount
                stock={product.stock - countInCart} 
                onAddToCart={handleAddToCart}
            />
        </div>
    )
}
