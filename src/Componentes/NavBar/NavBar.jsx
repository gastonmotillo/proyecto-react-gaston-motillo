import { Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import logo from '../../Imagenes/logo.png'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="nav">
        <div className="logo">
            <Link to='/'><img src={logo} alt="Logo"/></Link>
        </div>
        <div>
            <nav className="nav-list">
                <NavLink to="/categoria/vinos" className={({isActive})=>isActive? "nav-item" : "nav-item-out"}>Vinos</NavLink>
                <NavLink to="/categoria/cervezas" className={({isActive})=>isActive? "nav-item" : "nav-item-out"}>Cervezas</NavLink>
                <NavLink to="/categoria/aperitivos" className={({isActive})=>isActive? "nav-item" : "nav-item-out"}>Aperitivos</NavLink>
                <NavLink to="/categoria/whiskys" className={({isActive})=>isActive? "nav-item" : "nav-item-out"}>Whiskys</NavLink>
                <NavLink to="/categoria/otros" className={({isActive})=>isActive? "nav-item" : "nav-item-out"}>Otros</NavLink>
            </nav>
        </div>
        <Link to='/cart'>
          <CartWidget /> 
        </Link>
    </nav>
  )
}

export default NavBar
