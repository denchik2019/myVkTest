import React from 'react';
import className from './Message.module.css';
import Avatars from "./Avatars/Avatars";
import Dialogs from "./Dialogs/Dialogs";
import NewComponent from "../../ReactComponent/NewReactComponent";
import ImageUpload from "../../ReactComponent/NextReactComponent";


    const Message = (props) => {
        return(
            <div className={className.grids}>
               <div>
                  <Avatars states={props.states}/>
               </div>
                <div className={className.dialogs}>
                  <Dialogs state={props.state}/>
                </div>
                {/*<NewComponent/>*/}
                <ImageUpload/>
            </div>
        )
    };


export default Message;