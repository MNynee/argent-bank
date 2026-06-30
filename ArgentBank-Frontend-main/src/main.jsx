import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './main.css'
import Layout from './components/Layout'
import Home from './pages/Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          {/* <Route path='/about' element={<About />} /> */}
          {/* <Route path='/404' element={<Error />} /> */}
          {/* <Route path='*' element={<Error />} /> */}
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
)
