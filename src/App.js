import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MovieDetails from './pages/Movies/MovieDetails'
const App = () => {
  return (
    <BrowserRouter>
      <div className="font-roboto  antialiased bg-primary/90 text-white ">
        <NavBar />

        {/* main__section */}
        <div className='mt-16'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies/details/:id" element={<MovieDetails/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
export default App