import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartContextProvider } from "./Context/CartContext";
import { ToastContainer } from 'react-toastify';
import Banner from "./Componentes/Banner/Banner";
import CartContainer from "./Componentes/CartContainer/CartContainer";
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";
import NavBar from "./Componentes/NavBar/NavBar";
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Banner />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/categoria/:idCategoria"
            element={<ItemListContainer />}
          />
          <Route
            path="/detalle/:idProducto"
            element={<ItemDetailContainer />}
          />
          <Route path="/cart" element={<CartContainer />} />
        </Routes>
      </CartContextProvider>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
