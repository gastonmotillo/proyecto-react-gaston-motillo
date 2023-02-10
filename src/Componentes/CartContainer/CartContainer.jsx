import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import "./CartContainer.css";

const CartContainer = () => {
  const { cartList, eliminarProducto, vaciarCarrito } = useCartContext();

  const total = cartList.reduce(
    (acc, prod) => acc + prod.precio * prod.cantidad,
    0
  );

  return cartList.length > 0 ? (
    <div>
      {cartList.map((info) => (
        <div key={info.id} className="item-cart">
          <img src={info.img} alt="Foto" />
          <h2 className="item-cart-nombre">{info.nombre}</h2>
          <p className="item-cart-precio">Precio ${info.precio}</p>
          <p className="item-cart-cantidad">Cantidad: {info.cantidad}</p>
          <p className="item-cart-total">
            Total ${info.precio * info.cantidad}
          </p>
          <button
            className="item-cart-eliminar"
            onClick={() => eliminarProducto(info.id)}
          >
            Eliminar
          </button>
        </div>
      ))}
      <div className="item-cart-finalizar">
        <h3 className="item-cart-total-compra">Total a Pagar $ {total}</h3>
        <button className="pagar">Pagar</button>
        <button className="vaciar" onClick={vaciarCarrito}>
          Vaciar Carrito
        </button>
      </div>
    </div>
  ) : (
    <div className="item-cart-vacio">
      <h2>El carrito está vacío</h2>
      <p>Comienza a llenarlo con nuestros productos</p>
      <Link to="/">
        <button className="boton-volver">Ir de Compras</button>
      </Link>
    </div>
  );
};

export default CartContainer;
