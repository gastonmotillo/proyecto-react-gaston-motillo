import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ productos }) => {
  const [botones, setBotones] = useState(true);

  const ItemBoton = () => {
    return (
      <>
        <div className="item-boton">
          <Link to="/cart">
            <button className="boton-agregar">Ir al Carrito</button>
          </Link>
          <Link to="/">
            <button className="boton-agregar">Seguir Comprando</button>
          </Link>
        </div>
      </>
    );
  };

  const { agregarCarrito } = useCartContext();

  const onAdd = (cantidad) => {
    setBotones(false);
    agregarCarrito(productos, cantidad);
  };

  return (
    <div className="item-detail-card">
      <img src={productos.img} alt="Foto" />
      <div className="item-detail">
        <h2 className="item-detail-nombre">{productos.nombre}</h2>
        <p className="item-detail-descripcion">{productos.descripcion}</p>
        <h3 className="item-detail-precio">Precio ${productos.precio}</h3>
        {botones === true ? (
          <ItemCount initial={1} stock={productos.stock} onAdd={onAdd} />
        ) : (
          <ItemBoton />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
