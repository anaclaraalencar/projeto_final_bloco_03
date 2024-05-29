import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FormCategoria from './components/categorias/formcategorias/FormCategoria';
import ListarCategorias from './components/categorias/listarcategorias/ListarCategorias';
import Home from './pages/home/Home';
import DeletarCategoria from './components/categorias/deletarcategorias/DeletarCategoria';
import Navbar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';

function App() {

  return (
    <>
            
      <BrowserRouter>
      <Navbar />
        <div className='min-h-[90vh] bg-gray-200'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/cadastrarcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App