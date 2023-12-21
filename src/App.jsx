import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'

const App = () => {
  return (
    <div>
      
      <NavBar />
      
      <ItemListContainer greeting="Hola Bienvenido, gracias por visita la Tienda de Mariolo !!" />

    </div>
  )
}

export default App