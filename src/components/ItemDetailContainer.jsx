import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import products from './data/products';
import ItemDetail from './ItemDetail';

function getSingleItem(idURL){
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

    useEffect(() => {
        getSingleItem(id).then((respuesta) => {
            setProduct(respuesta);
        });
    }, [])
    return (
        <ItemDetail products={product}/>
    )
}
