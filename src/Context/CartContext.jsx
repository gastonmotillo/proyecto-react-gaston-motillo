import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {

  const prodEliminado = () => {
    toast.error("Producto Eliminado!", {
      position: "top-right",
      autoClose: 800,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const [cartList, setCartList] = useState([]);

  const agregarCarrito = (productos, cantidad) => {
    if (isInCArt(productos.id)) {
      setCartList(
        cartList.map((product) => {
          return product.id === productos.id
            ? { ...product, cantidad: product.cantidad + cantidad }
            : product;
        })
      );
    } else {
      setCartList([...cartList, { ...productos, cantidad }]);
    }
  };

  const vaciarCarrito = () => setCartList([]);

  const isInCArt = (id) =>
    cartList.find((product) => product.id === id) ? true : false;

  const eliminarProducto = (id) => {
    setCartList(cartList.filter((e) => e.id !== id));
    prodEliminado();
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        agregarCarrito,
        vaciarCarrito,
        eliminarProducto,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
