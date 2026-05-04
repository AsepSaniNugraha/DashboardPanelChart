import React, { useState, useRef } from 'react';
import { GiShoppingCart } from "react-icons/gi";
import { Link, NavLink } from 'react-router-dom';
import { MdDashboard, MdViewList, MdCategory, MdPeople, MdPlaylistAddCheckCircle, MdInsertChart, MdSettings } from "react-icons/md";

const Sidebar = () => {
    const dataLink = [
        {
            label: "Dashboard",
            icon: <MdDashboard />,
            link: "/"
        },
        {
            label: "Products",
            icon: <MdViewList />,
            link: "products"
        },
        {
            label: "Categories",
            icon: <MdCategory />,
            link: "categories"
        },
        {
            label: "Customers",
            icon: <MdPeople />,
            link: "customers"
        },
        {
            label: "Inventory",
            icon: <MdPlaylistAddCheckCircle />,
            link: "inventory"
        },
        {
            label: "Reports",
            icon: <MdInsertChart />,
            link: "reports"
        },
        {
            label: "Setting",
            icon: <MdSettings />,
            link: "setting"
        }
    ]

    const [position, setPosition] = useState(0)

    const containerRef = useRef(null);

    const handleMouseHover = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();

        const boxHeight = 50;

        setPosition(
            rect.top - containerRect.top + (rect.height - boxHeight) / 2 - 4
        );
    };

    return (
        <aside className='flex flex-col gap-10 bg-green-800 w-50 h-screen text-green-100 p-4 pe-0 pt-8'>
            <Link
                to="/"
                className='items-center justify-center mr-auto bg-yellow-500 flex gap-2 py-2 px-4 rounded-full text-center hover:opacity-90 cursor-pointer'>
                <GiShoppingCart className='text-4xl' />
                <p className='font-bold'>Venus Store</p>
            </Link>
            <ul
                ref={containerRef}
                className='relative flex flex-col gap-2 p-2 pe-0'>
                <div
                    className='absolute -left-0.5 p-3 w-38 h-11 border-l-8 border-l-white pointer-events-none transition-all duration-500 ease-in-out'
                    style={{ transform: `translateY(${position}px)` }}></div>
                {dataLink.map((link, index) => (
                    <li key={index}>
                        <NavLink
                            to={link.link}
                            onMouseEnter={handleMouseHover}
                            className={({ isActive }) =>
                                `relative flex items-center gap-4 p-3 ${isActive ? "bg-white rounded-l-lg navLink text-green-500" : "hover:text-green-400"
                                }`
                            }
                        >
                            <p className='text-2xl'>{link.icon}</p>
                            <p>{link.label}</p>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Sidebar