
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from "bootstrap";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Item from './components/Item/Item';
import CartWidget from './components/CartWidget';
import { CartProvider } from './context/cartContext';
import CartContainer from './components/CartContainer/CartContainer';
import Checkout from './components/Checkout';
//import { exportData } from './services/firestore';

/*import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRIgpuOL4UwsTvjtUJ0CGOWwZLb6qsXKY",
  authDomain: "products-ef85c.firebaseapp.com",
  projectId: "products-ef85c",
  storageBucket: "products-ef85c.appspot.com",
  messagingSenderId: "177160882695",
  appId: "1:177160882695:web:b3c4c2f0a3cd3c303478a2"
};

const app = initializeApp(firebaseConfig);
const db= getFirestore(app);*/

function App() {
  return (
    <>
    {/*<button onClick={exportData}>Exportar a Firebase</button>*/}
    <CartProvider> 
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:categoryid" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
        <Route path="/cart" element={<CartContainer/>}/>
        {/*<Route path="checkout/orderid" element={<Checkout/>}/>*/}
      </Routes>
    </BrowserRouter>
    </CartProvider> 
    </>
  );
}
export default App;