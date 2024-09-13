import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import ContactoPage from './pages/ContactoPage'
import NosotrosPage from './pages/NosotrosPage'
import PlanesPage from './pages/PlanesPage'

import Links from './components/layout/Links'

import './App.css'

// Cambiar los <a> en pages por componente <Link /> o <NavLink />

const App = () => {

  return (

    <div>
      <BrowserRouter>
      <Links />


        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/nosotros' element={<NosotrosPage />} />
          <Route path='/planes' element={<PlanesPage />} />
          <Route path='/contacto' element={<ContactoPage />} />
        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App
