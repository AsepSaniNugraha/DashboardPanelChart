import React from 'react';
import { GiCargoCrane } from "react-icons/gi";

const Setting = () => {
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='flex flex-col items-center text-purple-500'>
                <p className='font-bold text-3xl mb-6'>SETTING</p>
                <GiCargoCrane className='text-8xl  -scale-x-100' />
                <p className='text-xl'>under construction....</p>
            </div>
        </div>
    )
}

export default Setting