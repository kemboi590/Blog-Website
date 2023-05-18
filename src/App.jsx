
import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



//components
import Header from './components/header/Header'
import Blogs from './components/myblogs/Blogs'
import Footer from './components/footer/Footer'

//for pages
import WebDev from './pages/WebDev'
import TechJourney from './pages/TechJourney'
import FutureAI from './pages/FutureAI'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      {/* <Header /> 
      <Blogs />
      <Footer /> */}



      <Router>
        <Header />
        <Routes>

          <Route path="/" element={<Blogs />} />
          <Route path="/webdev" element={<WebDev />} />
          <Route path="/techjourney" element={<TechJourney />} />
          <Route path="/futureai" element={<FutureAI />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </Router>


{/* PAGES */}
      {/* <WebDev /> */}
      {/* <TechJourney /> */}
      {/* <FutureAI/> */}
      
    </>
  )
}


export default App
