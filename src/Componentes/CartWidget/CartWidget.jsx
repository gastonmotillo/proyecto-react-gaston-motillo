import { useCartContext } from "../../Context/CartContext";
import carrito from "/Imagenes/carrito.png";
import "./CartWidget.css";

const CartWidget = () => {
  const { cartList } = useCartContext();

  const cantTotal = cartList.reduce((acc, prod) => acc + prod.cantidad, 0);

  return (
    <div className="carrito">
      <img src={carrito} alt="Carrito" />
      {cantTotal > 0 ? <span>{cantTotal}</span> : ""}
    </div>
  );
};

export default CartWidget;
