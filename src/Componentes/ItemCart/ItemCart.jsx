
const ItemCart = ({cartList, eliminarProducto}) => {
  return (
    <div>
        {cartList.map((info) => (
        <div key={info.id} className="item-cart">
          <img src={info.img} alt="Foto" />
          <h2 className="item-cart-nombre">{info.nombre}</h2>
          <p className="item-cart-precio">Precio ${info.precio}</p>
          <p className="item-cart-cantidad">Cantidad: {info.cantidad}</p>
          <p className="item-cart-total">
            Total ${info.precio * info.cantidad}
          </p>
          <button
            className="item-cart-eliminar"
            onClick={() => eliminarProducto(info.id)}
          >
            Eliminar
          </button>
        </div>
      ))}
    </div>
  )
}

export default ItemCart