
// Importing the Menu component
import { Home } from './home/index.jsx'
import { Contatos } from './contatos/contato.jsx'
import { Sistemas } from './sistemas/sistemas.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const App = () => {
  console.log("App component loaded");
  
  return (
    <BrowserRouter>
      <div className=" bg-gray-900 text-white">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contatos' element={<Contatos />} />
          <Route path='/Sistemas/*' element={<Sistemas />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}




