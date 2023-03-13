
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from "bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer greeting="Bienvenido al consultorio de la Licenciada Daniela Zaccarello"/>
      </header>
    </div>
  );
}
export default App;