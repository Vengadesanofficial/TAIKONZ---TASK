import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter} from 'react-router-dom'
import { Route,Routes } from 'react-router-dom'
import Login from './Routes/Login'
import Register from './Routes/Register.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    
    <Routes>
      <Route exact path='/' element={<App/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
    </Routes>
  </BrowserRouter>,
)
