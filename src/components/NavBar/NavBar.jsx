import CartWidget from "../CartWidget";
import "./navbar.css";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

function NavBar() {
  const {cart} = useContext(cartContext);
  return (
    <div className="style-navbar">
      <Link to="/"><img src="/imgs/logo.png" className="style-logo" alt="Logo" /></Link>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand"></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span classNameName="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link to="/" className="nav-link active" aria-current="page">Inicio</Link>
              <Link to="/category/América" className="nav-link">Vuelos por América</Link>
              <Link to="/category/Europa" className="nav-link">Vuelos hacia Europa</Link>
              <Link to="/cart" className="nav-link"><CartWidget/></Link>
              <span>{cart.length}</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
