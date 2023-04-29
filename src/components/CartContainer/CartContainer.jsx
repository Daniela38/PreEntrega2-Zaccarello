import React, {useContext} from 'react';
import { cartContext } from '../../context/cartContext';
import Button from "../Button";
import { createOrder } from '../../services/firestore';
import swal from 'sweetalert';
import FormCheckout from './FormCheckout';

//import { useNavigate } from 'react-router-dom';

export default function CartContainer() {
  const context = useContext(cartContext);
  const {cart, getTotalPrice, removeItem, clearCart} = context;
  //const navigateTo = useNavigate();

  async function handleCheckout(){
    const order = {
      items: cart,
      buyer: {name: "Dani Coder"},
      total: getTotalPrice(),
      date: new Date(),
    }
    const orderId = await createOrder(order);

    const orderComplete = await swal({
      title: "Gracias por tu compra",
      text: "Tu compra se ha realizado correctamente. El numero de orden es: " + orderId,
      icon: "success",
    });
    clearCart();
    //navigateTo(`/checkout/${{orderId}}`);
  }

  //function removeItemFromCart(item){
    //removeItem()
    //e.target.parentNode.remove()
    //return console.log(cart);
  //}

  return (
    <div>
        <h1>Carrito de compras</h1>
        {cart.map((item) => (
          <div key={item.id}>
            <h6>{item.title}</h6>
            <h6>{item.price}</h6>
            <h6>{item.count}</h6>
            {/*<button onClick={removeItem(item.id)}>Borrar</button>*/}
            <Button onPress={() => removeItem(item.id)}>
              Borrar
            </Button>
          </div>
        ))}
        {/*<Button onPress={handleCheckout}>Finalizar compra</Button>*/}
        <FormCheckout onCheckout={handleCheckout}/>
    </div>
  );
}
