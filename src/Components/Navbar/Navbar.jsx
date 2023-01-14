import React from 'react'
import './Navbar.css'
import {NotificationsNone, PersonOutline, Settings} from '@material-ui/icons';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="navbarWrapper">
            <div className="navbar-left">
                <span className='logo'>Dashboard</span>
            </div>
                <div className="navbar-right">
                  <Link to='/login' className='link'>
                    <div className="username">
                      <div className="iconsWrapper">
                    <PersonOutline/>
                  </div>                   
                  <span>Login</span>
                 </div></Link>
                     <div className="iconsWrapper">
                    <Settings/>
                  </div>
                  <div className="iconsWrapper">
                      <NotificationsNone/>
                    <span className='navbar-badge'>2</span>
                  </div>
                </div>
                </div>
                </div>
  )
}
