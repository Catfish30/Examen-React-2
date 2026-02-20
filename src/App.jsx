import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Personajes from './pages/Personajes'
import PersonajeDetalle from './pages/PersonajeDetalle'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personajes" element={<Personajes />} />
        <Route path="/personaje/:id" element={<PersonajeDetalle />} />
      </Routes>
    </div>
  )
}

export default App