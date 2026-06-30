import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './main.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import User from './pages/User'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/user' element={<User />} />
          {/* <Route path='/404' element={<Error />} /> */}
          {/* <Route path='*' element={<Error />} /> */}
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
)
