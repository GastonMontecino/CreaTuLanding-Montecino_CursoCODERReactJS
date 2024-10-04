import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'


function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer mensaje='Aqui se mostrarán los items del catalogo'></ItemListContainer>
    </>
  )
}

export default App
