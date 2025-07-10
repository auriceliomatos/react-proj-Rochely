//import React from 'react'
import { createRoot } from 'react-dom/client'
//importação do styles
import './index.css'
// importação do componente Home
import { App } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>
)
