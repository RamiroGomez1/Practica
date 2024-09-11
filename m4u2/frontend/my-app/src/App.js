import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePagePage'
import contactoPage from './pages/contactoPage'
import NosotrosPage from './pages/NosotrosPage'
import NovedadesPage from './pages/NovedadesPage'

import Header from './components/layout/Header'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'


const App = () => {

  return (

    <div className='App'>
      <Header />

      <BrowserRouter>

        <Nav />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='nosotros' element={<NosotrosPage />} />
          <Route path='novedades' element={<NovedadesPage />} />
          <Route path='contacto' element={<ContactoPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>

  );
}

export default App
