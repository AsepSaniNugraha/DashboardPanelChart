import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Dashboard = () => {
    return (
        <div className='flex items-start justify-between w-full h-screen'>
            <div>
                <Sidebar />
            </div>
            <div className='flex flex-col w-full h-full items-end'>
                <Header />
                <div className='w-full h-full p-4 overflow-hidden'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Dashboard