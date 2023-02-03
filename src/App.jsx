import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./Componentes/Banner/Banner";
import CartContainer from "./Componentes/CartContainer/CartContainer";
import ItemCount from "./Componentes/ItemCount/ItemCount";
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";
import NavBar from "./Componentes/NavBar/NavBar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Banner />
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
        <Route path="/detalle/:idProducto" element={<ItemDetailContainer/>} />
        <Route path="/cart" element={<CartContainer/>} />
      </Routes>
      {/* <ItemCount /> */}
    </BrowserRouter>
  );
}

export default App;
