import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import Formulario from "../Formulario/Formulario";
import ItemCart from "../ItemCart/ItemCart";
import "./CartContainer.css";

const CartContainer = () => {

  const { cartList, eliminarProducto, vaciarCarrito } = useCartContext();

  const [vacio, setVacio] = useState(true);

  const total = cartList.reduce(
    (acc, prod) => acc + prod.precio * prod.cantidad,
    0
  );

  const [numOrden, setNumOrden] = useState()

  const [formData, setFormData] = useState({
    nombre:"",
    telefono: "",
    email:"",
    repetirEmail:""
  })
  
  const insertarOrden = (evt) => {
    evt.preventDefault()
    setVacio(false)
    const orden = {};
    if (
      (formData.email === formData.repetirEmail) && (formData.email != "") && (formData.repetirEmail != "")
      && (formData.nombre != "") && (formData.telefono != "")
    ) {
    orden.comprador = formData;
    orden.productos = cartList.map(({id, nombre, precio}) => ({id, nombre, precio}));
    orden.totalCompra = total;

    const db = getFirestore();
    const ordenCollection = collection(db, "Ordenes")

    addDoc(ordenCollection, orden)
    .then(resp => setNumOrden (resp.id))
    .catch((error) => console.log(error))
    .finally(() => {
      vaciarCarrito()
      setFormData({
        nombre:"",
        telefono: "",
        email:"",
        repetirEmail:""
      })
    }) } else {
      alert("Por favor verifique si hay campos sin completar o si el mail no coincide en ambos campos. Gracias!")
    }
  }  

  const cambioForm = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    })
  }

  return cartList.length > 0 ? (
    <div>
      <ItemCart cartList={cartList} eliminarProducto={eliminarProducto} />
      <div className="item-cart-finalizar">
        <Formulario insertarOrden={insertarOrden} cambioForm={cambioForm} formData={formData} />
        <h3 className="item-cart-total-compra">Total a Pagar $ {total}</h3>
        <button className="vaciar" onClick={vaciarCarrito}>
          Vaciar Carrito
        </button>
      </div>
    </div>
  ) : (
    vacio ? (
    <div className="item-cart-vacio">
      <h2>El carrito está vacío</h2>
      <p>Comienza a llenarlo con nuestros productos</p>
      <Link to="/">
        <button className="boton-volver">Ir de Compras</button>
      </Link>
    </div>
    ) :
    (
      <div className="item-cart-vacio">
      <h2>Su orden de compra es la Nro: {numOrden}</h2>
      <p>Gracias por su Compra!</p>
      <Link to="/">
        <button className="boton-volver">Seguir Comprando</button>
      </Link>
    </div>
    )
  );
};

export default CartContainer;
