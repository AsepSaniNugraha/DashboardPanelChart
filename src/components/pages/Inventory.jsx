import React from 'react';
import { GiCargoCrane } from "react-icons/gi";

const Inventory = () => {
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='flex flex-col items-center text-yellow-500'>
                <p className='font-bold text-3xl mb-6'>INVENTORY</p>
                <GiCargoCrane className='text-8xl' />
                <p className='text-xl'>under construction....</p>
            </div>
        </div>
    )
}

export default Inventory