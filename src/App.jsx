import './App.css'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import NavBar from './Componentes/NavBar/NavBar'

function App() {
  

  return (
    <div className='body'>
      <NavBar />
      <ItemListContainer greeting='REPUBLIC | Tienda de Bebidas 🥂' />      
    </div>
  )
}

export default App
