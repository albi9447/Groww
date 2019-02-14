import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/groww-logo.svg';

const Header = () => {
      return (
        <div className="header">
          <div>
            <Link to = "/" > 
              <img src={logo} alt="groww" className="header-logo" />
            </Link>
          </div>
          <div></div>
          <div className="nav-list">
                <Link to="/explore" className="nav-links">Products</Link>
                <Link to="/" className="nav-links">Help</Link>
                <Link to="/" className="nav-links">Login</Link>
                <Link to="/" className="nav-links">Sign Up</Link>
          </div>
        </div>
      )
    }

export default Header;