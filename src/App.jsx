import './App.css'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItmDetailContainer.jsx';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  return (
    <>
          
      <BrowserRouter>
        <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:cat" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
