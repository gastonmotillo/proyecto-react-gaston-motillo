import CartWidget from "../CartWidget/CartWidget"
import logo from '../../Imagenes/logo.png'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="nav">
        <div className="logo">
            <img src={logo} alt="Logo"/>
        </div>
        <div>
            <ul className="nav-list">
                <li className="nav-item">Vinos</li>
                <li className="nav-item">Cervezas</li>
                <li className="nav-item">Aperitivos</li>
                <li className="nav-item">Whiskys</li>
                <li className="nav-item">Otros</li>
            </ul>
        </div>
        
        <CartWidget />
        
    </nav>
  )
}

export default NavBar
