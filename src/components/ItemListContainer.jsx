
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import products from "./data/products";

function getItems(){
    const promesa = new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
    return promesa;
}

function getItemsByCategory(categoryURL){
    const promesa = new Promise((resolve) => {
        setTimeout(() => {
            const filtro = products.filter((product) => product.category === categoryURL);
            resolve(filtro)
        }, 1000);
    });
    return promesa;
}

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const {categoryid} = useParams();

    useEffect(() => {
        if(categoryid === undefined){
            getItems().then((respuesta) => {
                setProducts(respuesta);
            });
        } else{
            getItemsByCategory(categoryid).then((respuesta) => {
                setProducts(respuesta);
            } );
        }
    }, [categoryid]);

    return (
        <ItemList products={products}/> 
    )
}
export default ItemListContainer;