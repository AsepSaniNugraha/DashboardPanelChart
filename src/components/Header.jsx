import React, { useState } from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdNotificationsNone } from "react-icons/md";
import { Link } from 'react-router-dom';

const Header = () => {
    const [tooltip, setTooltip] = useState(null);

    const handleTooltip = (tag) => {
        setTooltip(tag)
    }
    return (
        <header className='bg-green-500 w-1/6 h-10 flex items-center justify-center shadow-xl mx-auto mt-2 rounded-2xl'>
            <div className='flex items-center justify-start p-4 gap-5 text-green-300 text-2xl'>
                <Link
                    onMouseEnter={() => handleTooltip("notif")}
                    onMouseLeave={() => handleTooltip(null)}
                    className='relative hover:text-green-100'>
                    <MdNotificationsNone />
                    <div className={`absolute top-3/4 left-6 bg-slate-200 text-green-600 text-base py-1 px-2 rounded-md z-10 transition-all duration-300 ease ${tooltip === "notif" ? "" : "opacity-0"}`}>
                        <p>Notifications</p>
                    </div>
                </Link>
                <Link
                    onMouseEnter={() => handleTooltip("mail")}
                    onMouseLeave={() => handleTooltip(null)}
                    className='relative hover:text-green-100'>
                    <MdOutlineMail />
                    <div className={`absolute top-3/4 left-6 bg-slate-200 text-green-600 text-base py-1 px-2 rounded-md z-10 transition-all duration-300 ease ${tooltip === "mail" ? "" : "opacity-0"}`}>
                        <p>Messages</p>
                    </div>
                </Link>
                <Link
                    onMouseEnter={() => handleTooltip("profile")}
                    onMouseLeave={() => handleTooltip(null)}
                    className='relative hover:text-green-100'>
                    <FaRegUserCircle />
                    <div className={`absolute top-3/4 left-6 bg-slate-200 text-green-600 text-base py-1 px-2 rounded-md z-10 transition-all duration-300 ease ${tooltip === "profile" ? "" : "opacity-0"}`}>
                        <p>Profile</p>
                    </div>
                </Link>
            </div>
        </header>
    )
}

export default Header