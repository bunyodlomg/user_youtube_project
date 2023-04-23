import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeConext } from './context/ThemeConext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeConext>
    <App />
  </ThemeConext>
)
