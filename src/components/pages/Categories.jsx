import React, { useState } from 'react';
import { GiCargoCrane } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";
import CategoriesChart from '../Charts/CategoriesChart';
import CategoriesChart2 from '../Charts/CategoriesChart2';
import CategoriesChart3 from '../Charts/CategoriesChart3';
import CategoriesChart2Big from '../Charts/CategoriesChart2Big';
import CategoriesChart3Big from '../Charts/CategoriesChart3Big';

const Categories = () => {
    const [enlarge, setEnlarge] = useState(null)

    return (
        <div className='w-full h-full p-4'>
            <div className='relative grid grid-cols-3 grid-rows-2 gap-4 h-full'>
                <div className={`absolute w-full h-full py-4 bg-white/60 backdrop-blur-xs inset-0 z-10 transition-all duration-300 ease ${enlarge === "chart2" ? "" : "opacity-0 pointer-events-none"}`}>
                    <div className='relative bg-white p-4 rounded-lg border border-green-300 shadow-xl w-1/2 h-full mx-auto'>
                        <button
                            onClick={() => setEnlarge(null)}
                            className='absolute right-2 top-2 text-2xl text-green-500 p-1 rounded-lg border border-transparent hover:border hover:border-green-500'>
                            <MdClose />
                        </button>
                        <CategoriesChart2Big />
                    </div>
                </div>
                <div className={`absolute w-full h-full py-4 bg-white/60 backdrop-blur-xs inset-0 z-10 transition-all duration-300 ease ${enlarge === "chart3" ? "" : "opacity-0 pointer-events-none"}`}>
                    <div className='relative bg-white p-4 rounded-lg border border-green-300 shadow-xl w-1/2 h-full mx-auto'>
                        <button
                            onClick={() => setEnlarge(null)}
                            className='absolute right-2 top-2 text-2xl text-green-500 p-1 rounded-lg border border-transparent hover:border hover:border-green-500'>
                            <MdClose />
                        </button>
                        <CategoriesChart3Big />
                    </div>
                </div>
                <div className='col-span-2 row-span-2 border border-green-300 rounded-lg p-4 h-full'>
                    <CategoriesChart />
                </div>
                <div className='relative border border-green-300 rounded-lg p-4 h-full'>
                    <button
                        onClick={() => setEnlarge("chart2")}
                        className='absolute z-5 bottom-4 right-4 text-green-500 hover:text-green-700'>
                        <FaMagnifyingGlass />
                    </button>
                    <CategoriesChart2 />
                </div>
                <div className='relative border border-green-300 rounded-lg p-4 h-full'>
                    <button
                        onClick={() => setEnlarge("chart3")}
                        className='absolute z-5 bottom-4 right-4 text-green-500 hover:text-green-700'>
                        <FaMagnifyingGlass />
                    </button>
                    <CategoriesChart3 />
                </div>
            </div>
        </div>
    )
}

export default Categories