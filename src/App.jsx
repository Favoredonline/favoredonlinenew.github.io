import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import About from './Pages/About'
import Footer from './components/Footer'

function App() {

  return (
    <div className='bg-[#1a1a1a] min-h-screen'>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  )
}

export default App
