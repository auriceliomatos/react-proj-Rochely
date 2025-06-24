// importações de react router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// importações de páginas -> componentes
import { Home } from './home/home.jsx'
import { Contatos } from './contatos/contatos.jsx'
import { Livros } from './livros/livros.jsx'
import { Canetas } from './canetas/canetas.jsx'


export const HomePage = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contatos" element={<Contatos />} />
                <Route path="/livros" element={<Livros />} />
                <Route path="/canetas" element={<Canetas />} />
            </Routes>
        </BrowserRouter>
    )
}
