import React from 'react';
import className from './Header.module.css';
const Header = (props) => {

    return(
            <div className={className.header}>
                <div className={className.logoContainer}>
                    <a href="#">
                        <img className={className.logo} src={props.logo} alt=""/>
                    </a>
                </div>
            </div>
    )
};

export default Header;