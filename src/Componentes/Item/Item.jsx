import { Link } from "react-router-dom";
import "./Item.css";


const Item = ({info}) => {
  return (
    <div key={info.id} className="item-card">
      <img src={info.img} alt="Foto" />
      <h2 className="item-nombre">{info.nombre}</h2>
      <p className="item-precio">${info.precio}</p>
      <Link to={`/detalle/${info.id}`}>
        <button className="item-detalle" id={info.id}>
          Detalle
        </button>
      </Link>
    </div>
  );
};

export default Item;
