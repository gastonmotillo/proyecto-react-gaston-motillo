import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { gFetch } from "../../Productos/Productos";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const { idCategoria } = useParams();

  useEffect(() => {
    if (idCategoria) {
      gFetch()
        .then((res) => {
          setProductos(res.filter((prod) => prod.categoria === idCategoria));
        })
        .catch((error) => console.log(error))
        .finally(() => setCargando(false));
    } else {
      setTimeout(() => {
        gFetch()
          .then((res) => {
            setProductos(res);
          })
          .catch((error) => console.log(error))
          .finally(() => setCargando(false));
      }, 2000);
    }
  }, [idCategoria]);

  return (
    <>
      <div className="item-list-cont">
        {cargando ? (
          <h2 className="cargando">Cargando...</h2>
        ) : (
          <ItemList productos={productos} />
        )}
      </div>
    </>
  );
};

export default ItemListContainer;
