import React, {useContext} from 'react';
import { cartContext } from '../../context/cartContext';
import Button from "../Button";
import { createOrder } from '../../services/firestore';
import swal from 'sweetalert';
import FormCheckout from './FormCheckout';
//import { useNavigate } from 'react-router-dom';

export default function CartContainer() {
  const context = useContext(cartContext);
  const {cart, getTotalPrice} = context;
  //const navigateTo = useNavigate();

  async function handleCheckout(){
    const order = {
      items: cart,
      buyer: {name: "Santiago Coder"},
      total: getTotalPrice(),
      date: new Date(),
    }
    const orderId = await createOrder(order);

    const orderComplete = await swal({
      title: "Gracias por tu compra",
      text: "Tu compra se ha realizado correctamente. El numero de orden es: " + orderId,
      icon: "success",
    });
    //navigateTo(`/checkout/${{orderId}}`);
  }

  return (
    <div>
        <h1>Carrito de compras</h1>
        {cart.map((item) => (
            <h3>{item.title}</h3>
        ))}
        {/*<Button onPress={handleCheckout}>Finalizar compra</Button>*/}
        <FormCheckout onCheckout={handleCheckout}/>
    </div>
  );
}
