import { Link } from "react-router-dom";
import "./ItemDetail.css";

const ItemDetail = ({ productos }) => {
  console.log(productos);
  return (
    <div key={productos.id} className="item-detail-card">
      <img src={productos.img} alt="Foto" />
      <div className="item-detail">
        <h2 className="item-detail-nombre">{productos.nombre}</h2>
        <p className="item-detail-descripcion">{productos.descripcion}</p>
        <p className="item-detail-precio">Precio ${productos.precio}</p>
        <spaan className="item-detail-precio">+ cantidad -</spaan>
        <button className="item-detail-comprar">Comprar</button>
      </div>
    </div>
  );
};

export default ItemDetail;
