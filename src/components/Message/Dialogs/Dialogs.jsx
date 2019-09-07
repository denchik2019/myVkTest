import React from 'react';
import className from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";


const Dialogs = (props) => {
    let newDialog = props.state.dialogs.map(dialog => <Dialog message={dialog.message}/>);
    return(
        <div>
            {newDialog}
        </div>
    )
};
export default Dialogs;