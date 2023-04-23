import React, {useState} from 'react';
import Button from '../Button';

export default function ItemCount(props) {
    const [count, setCount] = useState(1);
    //const stock = props.stock;
    function handleAddd(){
        //if(count < stock){
            setCount(count + 1);
        /*}
        else{
            setCount(count + 0);
        }*/
    }
    function handleSubstract(){
        if(count > 1){
            setCount(count - 1)
        }
        else{
            setCount(count - 0);
        }
    }
    return (
        <div>
            <Button onPress={handleSubstract}>
                -
            </Button>
            <button> {count} </button>
            <Button onPress={handleAddd}>
                +
            </Button>
            <Button onPress={() => props.onAddToCart(count)}>
                Agregar al carrito
            </Button>
        </div>
    )
}
