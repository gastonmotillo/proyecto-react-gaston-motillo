import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const { idCategoria } = useParams();

  useEffect(() => {
    
    const db = getFirestore();
    const queryC = collection(db, "Productos");
    const queryF = idCategoria? query(queryC, where("categoria", "==", idCategoria)) : queryC;
    
    getDocs(queryF)
    .then(resp => setProductos(resp.docs.map( product =>({id: product.id, ...product.data()}))))   
    .catch((error) => console.log(error))
    .finally(() => setCargando(false));

  }, [idCategoria])

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
