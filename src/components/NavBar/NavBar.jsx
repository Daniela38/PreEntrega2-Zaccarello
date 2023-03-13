import CartWidget from "../CartWidget";
import "./navbar.css";

function NavBar() {
  return (
    <div className="style-navbar">
      <img src="/imgs/logo.png" className="style-logo" alt="Logo" />
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
              <a
                className="nav-link active"
                aria-current="page"
                href="index.html"
              >
                Sobre mi
              </a>
              <a
                className="nav-link"
                href="pages/plan-alimentacion.html"
              >
                Plan de alimentación
              </a>
              <a
                className="nav-link"
                href="pages/consultas-presenciales.html"
              >
                Consultas presenciales
              </a>
              <a
                className="nav-link"
                href="pages/consultas-virtuales.html"
              >
                Consultas virtuales
              </a>
              <a className="nav-link" href="pages/contacto.html">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </nav>
      <CartWidget/>
    </div>
  );
}
export default NavBar;
