import './App.css'
import ItemListContainer from './Components/ItemListContainer'
import NavBar from './Components/NavBar'

function App() {

  return (
    <div className = "App">
      <NavBar/>
      <ItemListContainer titulo='BIENVENIDOS A LA NUESTRA TIENDA!'/>
    </div>
  )
}

export default App
