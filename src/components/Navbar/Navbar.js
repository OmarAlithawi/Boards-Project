import React from 'react'
import { NavLink } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Logout from "./Logout";
// Navbar styled in index.css 



export default function Navbar() {
    return (
      <div className="navbar-head">
        <NavLink to="/" className="navigation-items">Home</NavLink>
        <NavLink to="/contact" className="navigation-items">Contact</NavLink>
        <NavLink to="/about" className="navigation-items">About Us</NavLink>
        <Logout />
        <IconButton style={{ backgroundColor: 'transparent' }} >
          <Avatar alt="user-avatar" className='avatar-img' src="https://media-exp1.licdn.com/dms/image/C4D03AQGX8bqY_KfYPA/profile-displayphoto-shrink_400_400/0?e=1596672000&v=beta&t=ieqRa-VfdC3UJtdVL41Rl7tntMVo1P_QDIPZT7VS8QI" /> 
        </IconButton>
      </div>
    );
}
