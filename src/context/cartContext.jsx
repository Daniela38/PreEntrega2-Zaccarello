import { createContext, useState } from "react";
import products from "../components/data/products";

const cartContext = createContext({ cart: [] });
const Provider = cartContext.Provider;

function CartProvider(props){
    const [cart, setCart] = useState([]);
    const newCart = [...cart];
    console.log(newCart);
    function addItem(product, countFromCounter){
        if(isItemInCart(product.id)){
            const itemIndex = cart.findIndex(
                (itemInCart) => itemInCart.id === product.id
            );
            newCart[itemIndex].count += countFromCounter;
        } else{
            newCart.push({...product, count: countFromCounter});
        }
        setCart(newCart);
        if(newCart.length > 0){
            
        }
    }

    function isItemInCart(id){
        return cart.some((itemInCart) => itemInCart.id === id);
    }

    function getCountInCart(id){
        const item = cart.find((itemInCart) => itemInCart.id === id);
        return item !== undefined ? item.count : 0;
    }

    function getTotalPrice(){
        let total = 0;
        products.forEach(item => total += item.count)
        return 1900;
    }

    function removeItem(id){
        setCart(cart.filter(item => item.id !== id))
    }

    return(
        <Provider
            value={{cart: cart, addItem, isItemInCart, getCountInCart, getTotalPrice, removeItem}}
        >
            {props.children}
        </Provider>
    )
}

export { cartContext, CartProvider };