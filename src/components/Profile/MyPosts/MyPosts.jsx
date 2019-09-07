import React from 'react';
import MyPost from "./MyPost/MyPost";
import className from  './MyPosts.module.css';

const MyPosts = (props) => {
    return(
        <div className={className.grids}>
            <div>
                <MyPost avatar={<i className="fas fa-user-astronaut fa-2x"></i>} name='Denis' message='Hello'/>
                <MyPost avatar={<i className="fas fa-user-astronaut fa-2x"></i>} name='Denis' message='Hi'/>
                <MyPost avatar={<i className="fas fa-user-astronaut fa-2x"></i>} name='Denis' message='I am man'/>
            </div>
        </div>
    )
};

export default MyPosts;