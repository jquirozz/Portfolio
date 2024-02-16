// MODULES
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// PAGES
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'

import Work from './pages/work/Work'

// COMPONENTS
import NavBar from './components/navBar/NavBar'

// STYLES
import './App.scss'

const COLORS = [
  '700', // Red
  '007', // Blue
  '407' // Purple
]

function App () {
  // Get random main color
  useEffect(() => {
    const index = Math.floor(Math.random() * COLORS.length)
    const newColor = COLORS[index]
    document.documentElement.style.setProperty('--main', `#${newColor}`)
  }, [])

  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/work' element={<Work />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
