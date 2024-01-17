// MODULES
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// PAGES
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

// COMPONENTS
import NavBar from './components/NavBar'

// STYLES
import './App.scss'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
