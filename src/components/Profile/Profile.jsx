import React from 'react';
import className from './Profile.module.css';
import MyProfile from "./MyProfile/MyProfile";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return(
        <div className={className.grids}>
            <div className={className.flex}>
                 My profile
                <MyProfile/>
                <MyPosts/>
            </div>
        </div>
    )
};

export default Profile;