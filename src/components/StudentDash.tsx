import exp from "constants";
import React from "react";
import { Link } from "react-router-dom";
import ProfileIcon from './ProfileIcon';

function StudentDashoard() {

    return (
        <>
            <div className="flex justify-center items-center grid grid-cols-2">

                <div className="bg-gray-200 p-4 w-1/3 h-screen">
                    <ProfileIcon />
                </div>

                <div>
                    <h3>Wlcome to your Dashboard</h3>
                </div>
            </div>
        </>
    );
}
export default StudentDashoard;