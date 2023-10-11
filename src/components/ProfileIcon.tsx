import React from 'react';
import { FaUserCircle } from 'react-icons/fa'; // Import the user circle icon from react-icons

const ProfileIcon = () => {
    return (
        <div className="items-center content-center justify-center">
            <FaUserCircle className="text-6xl  text-blue-500 mr-2 mb-2" />
            <span className="text-lg font-semibold">Username</span>
        </div>
    );
};

export default ProfileIcon;
