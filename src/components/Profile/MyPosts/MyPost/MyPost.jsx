import React from 'react';
import className from './MyPost.module.css';


const MyPost = (props) => {
    return(
        <div className={className.container}>
            <div className={className.item}>
              <i>{props.avatar}</i><span>{props.name}</span>
            </div>
            <div className={className.message}>{props.message}</div>
      </div>
    )
};

export default MyPost;