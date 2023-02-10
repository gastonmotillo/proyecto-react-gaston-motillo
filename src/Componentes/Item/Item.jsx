import { memo } from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = memo(({ info }) => {
  return (
    <Link to={`/detalle/${info.id}`} className="link">
      <div className="item-card">
        <img src={info.img} alt="Foto" />
        <h2 className="item-nombre">{info.nombre}</h2>
        <p className="item-precio">${info.precio}</p>
      </div>
    </Link>
  );
});

export default Item;
