import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import ContactoPage from './pages/ContactoPage'
import NoticiasPage from './pages/NoticiasPage'
import PlanesPage from './pages/PlanesPage'

import Links from './components/layout/Links'

import './App.css'


// arreglar el ruteo de imagenes, crear page blogs, arreglar ruteo 'Noticias' 

const App = () => {

  return (

    <div>
      <BrowserRouter>
      <Links />


        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/planes' element={<PlanesPage />} />
          <Route path='/noticias' element={<NoticiasPage />} />
          <Route path='/contacto' element={<ContactoPage />} />
        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App
