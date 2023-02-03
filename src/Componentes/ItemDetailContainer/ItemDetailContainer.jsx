import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { gFetch } from "../../Productos/Productos";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { idProducto } = useParams();

  useEffect(() => {
    if (idProducto) {
      gFetch()
        .then((res) => {
          setProductos(res.find((prod) => prod.id === parseInt(idProducto)));
        })
        .catch((error) => console.log(error))
        .finally(() => setCargando(false));
    } else {
      gFetch()
        .then((res) => {
          setProductos(res);
        })
        .catch((error) => console.log(error))
        .finally(() => setCargando(false));
    }
  }, [idProducto]);
  return (
    <div className="item-detail-cont">
      {cargando ? (
          <h2 className="cargando">Cargando...</h2>
        ) : (
      <ItemDetail productos={productos}/>
        )}
    </div>
  );
};

export default ItemDetailContainer;
