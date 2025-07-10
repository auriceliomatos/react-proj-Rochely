import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Importing the Menu component
import { Home } from './home/index.jsx'
import { Contatos } from './contatos/contatos.jsx'
import { Sistemas } from './sistemas/sistemas.jsx'

export const App = () => {
  console.log("App component loaded");
  
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-celeste text-branca font-roboto">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contatos' element={<Contatos />} />
          <Route path='/sistemas/*' element={<Sistemas />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}




