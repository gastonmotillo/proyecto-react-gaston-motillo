import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { idProducto } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryD = doc(db, "Productos", idProducto);
    setTimeout(() => {
      getDoc(queryD)
      .then(resp => setProductos({id: resp.id, ...resp.data()}))
      .catch((error) => console.log(error))
      .finally(() => setCargando(false))
    }, 1000);
  }, [idProducto]);

  return (
    <div className="item-detail-cont">
      {cargando ? (
        <h2 className="cargando">Cargando...</h2>
      ) : (
        <ItemDetail productos={productos} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
