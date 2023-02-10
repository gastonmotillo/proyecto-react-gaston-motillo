import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
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

  const eliminarProducto = (id) =>
    setCartList(cartList.filter((e) => e.id !== id));

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
