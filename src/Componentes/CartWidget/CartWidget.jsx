import carrito from '../../Imagenes/carrito.png'
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className='carrito'>
        <img src={carrito} alt="Carrito" />
        <span>0</span>
    </div>
  )
}

export default CartWidget