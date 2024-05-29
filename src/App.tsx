import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navBar/NavBar'
import Footer from './components/footer/Footer'
import Home from './pages/home/home'
import ListarCategorias from './components/categorias/listarcategorias/ListarCategorias'
import FormCategoria from './components/categorias/formcategorias/FormCategoria'
import DeletarCategoria from './components/categorias/deletarcategorias/DeletarCategoria'

function App() {

  return (
    <>
      <BrowserRouter>
                  <Navbar />
                  <div className='min-h-[80vh]'>
                  <Routes>
                          <Route path="/" element={<Home/>} />
                          <Route path="/home" element={<Home />} />
                          <Route path="/categoria" element={<ListarCategorias />} />
                          <Route path="/cadastrarcategoria" element={<FormCategoria />} />
                          <Route path="/editarcategoria/:id" element={<FormCategoria />} />
                          <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
                    </Routes>
                  </div>
                  <Footer />
              </BrowserRouter>
    </>
  )
}

export default App