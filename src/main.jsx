import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import {ExtrasApp} from './ExtrasApp'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
       <ExtrasApp/>
    </BrowserRouter>
  </React.StrictMode>,
)
