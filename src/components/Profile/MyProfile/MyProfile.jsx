import React from 'react';
import className from './MyProfile.module.css';
const MyProfile = () => {
    return(
        <div className={className.container}>
            <div className={className.containerBlockMain}>
                <div className={className.containerBlock}>
                    <div className={className.containerBlockImg}>
                        <a href="#">
                            <i className="fas fa-camera fa-6x" style={{color: '#A3B5C5'}}></i>
                            <span>Upload a profile picture</span>
                        </a>
                    </div>
                </div>
                    <div className={className.containerBlockEdit}>

                    </div>
                    <div className={className.containerBlockTransfers}>

                    </div>
            </div>
        </div>
    )
}

export default MyProfile;