import { createContext, useState } from "react";

const cartContext = createContext({ default: "default" });
const Provider = cartContext.Provider;

function CartProvider(props){
    const [cart, setCart] = useState([]);
    
    function addItem(product, count){
        /*if(isItemInCart(product.id)){
            const itemIndex = cart.findIndex(
                (itemInCart) => itemInCart.id == product.id
            );
        }*/
        const newCart = [...cart];
        newCart.push({...product, count});
        setCart(newCart);
    }

    /*function isItemInCart(id){
        return cart.some((itemInCart) => itemInCart.id === id);
    }

    function getCountInCart(id){
        const item = cart.find((itemInCart) => itemInCart.id === id);
        return item !== undefined ? item.count : 0;
    }*/

    function getTotalPrice(){
        let total = 0;
        /*total = total + (count * price)*/
        return 1900;
    }

    return(
        <Provider
            value={{cart: cart, addItem, getTotalPrice}}
        >
            {props.children}
        </Provider>
    )
}

export { cartContext, CartProvider };