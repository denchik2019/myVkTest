import React from 'react';
import className from './Dialog.module.css';


const Dialog = (props) => {
    return(
        <div>
            <span>{props.message}</span>
        </div>
    )
};
export default Dialog;