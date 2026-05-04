import React, { useState } from 'react';
import { MdViewList, MdCategory, MdPeople, MdNotifications } from "react-icons/md";
import TopProducts from '../Charts/TopProducts';
import CustomersChart from '../Charts/CustomersChart';

const Home = () => {
    const dataStat = [
        {
            title: "PRODUCTS",
            icon: <MdViewList />,
            number: "314",
            background: "bg-blue-500"
        },
        {
            title: "CATEGORIES",
            icon: <MdCategory />,
            number: "23",
            background: "bg-orange-500"
        },
        {
            title: "CUSTOMERS",
            icon: <MdPeople />,
            number: "1500+",
            background: "bg-green-500"
        },
        {
            title: "ALERTS",
            icon: <MdNotifications />,
            number: "12",
            background: "bg-red-500"
        },
    ]
    return (
        <div className='grid grid-cols-4 grid-rows-5 gap-4 text-white h-full'>
            {dataStat.map((item, index) => (
                <div className={`flex flex-col row-start-0 row-end-1 gap-15 p-4 rounded-lg ${item.background}`}>
                    <div className='flex items-center justify-between w-full max-h-max'>
                        <p>{item.title}</p>
                        <p className='text-2xl'>{item.icon}</p>
                    </div>
                    <p className='text-right font-semibold text-2xl'>{item.number}</p>
                </div>
            ))}

            <div className='flex flex-col gap-10 items-center justify-center p-4 col-span-2 row-span-full rounded-lg bg-slate-300/80 text-slate-700'>
                <TopProducts />
            </div>

            <div className='flex flex-col gap-10 items-center justify-center p-4 col-span-2 row-span-full rounded-lg bg-slate-300/80 text-slate-700'>
                <CustomersChart />
            </div>
        </div>
    )
}

export default Home