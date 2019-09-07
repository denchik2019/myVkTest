import React from 'react';
import className from './Avatars.module.css';
import Avatar from "./Avatar/Avatar";



const Avatars = (props) => {
    let newAvatar = props.states.avatars.map(avatar => <Avatar name={avatar.name} id={avatar.id}/>);

    return(
        <div className={className.container}>
            {newAvatar}
        </div>
    )
};


export default Avatars;