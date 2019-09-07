import React from 'react';
import {NavLink} from "react-router-dom";
import className from './Navbar.module.css';

const Navbar = () => {
    return(
        <div className={className.navbar}>
            <div className={className.navbarItem}><i id='icon' className="fas fa-home" /><NavLink activeClassName={className.activeItem} to='/profile'>Profile</NavLink></div>
            <div className={className.navbarItem}><span><i id='icon' className="fas fa-newspaper" /></span><NavLink activeClassName={className.activeItem} to='/news'>News</NavLink></div>
            <div className={className.navbarItem}><span><i id='icon' className="fas fa-comments" /></span><NavLink activeClassName={className.activeItem} to='/message'>Messages</NavLink></div>
            <div className={className.navbarItem}><span><i id='icon' className="fas fa-user-friends" /></span><NavLink activeClassName={className.activeItem} to='/friends'>Friends</NavLink></div>
        </div>
    )
};

export default Navbar;