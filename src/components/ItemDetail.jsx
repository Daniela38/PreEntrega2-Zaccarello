import React from 'react'
import products from './data/products'

export default function ItemDetail(props) {
  return (
    <div>
        <h1>{props.products.title}</h1>
        <h3>{props.products.category}</h3>
        <p>{props.products.description}</p>
        <p>Precio: {props.products.price}</p>
    </div>
  )
}
