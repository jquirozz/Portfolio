// MODULES
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// PAGES
import NotFound from './pages/NotFound'
import Home from './pages/Home'

// STYLES
import './App.scss'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
