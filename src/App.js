
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from "bootstrap";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Item from './components/Item/Item';
import CartWidget from './components/CartWidget';

function App() {
  return (  
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:categoryid" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
        <Route path="/cart" element={<h1>Carrito de compras</h1>} />
      </Routes>

    </BrowserRouter>
  );
}
export default App;