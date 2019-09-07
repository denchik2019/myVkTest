import React from 'react';
import className from './Avatar.module.css';
import {NavLink} from "react-router-dom";


const Avatar = (props) => {
    return(
        <div className={className.container}>
            <div className={className.navlink}>
                <div className={className.item}><NavLink to={'/message/' + props.id}>{props.name}</NavLink></div>
            </div>
        </div>
    )
};


export default Avatar;