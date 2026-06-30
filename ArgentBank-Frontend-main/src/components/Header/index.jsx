import { NavLink } from 'react-router-dom'
import logo from '../../assets/argentBankLogo.webp'
import './header.css'

const Header = () => {
  return (
    <nav className="main-nav">
      <NavLink to="/" end="" className="main-nav-logo main-nav-link">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        <NavLink to="/sign-in" className="main-nav-item main-nav-link">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      </div>
    </nav>
  )
}

export default Header