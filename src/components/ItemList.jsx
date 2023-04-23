import React from 'react'
import Item from './Item/Item';

export default function ItemList(props) {
  return (
    <div className='row'>
    {props.products.map((producto) => (
        <Item
            key={producto.id}
            id={producto.id}
            img={producto.img}
            title={producto.title}
            price={producto.price}
            category={producto.category}
            stock={producto.stock}
        />
    ))}
    </div>
  );
}
