import React from 'react';
import CustomersLineChart from '../Charts/CustomersLineChart';

const Customers = () => {
    return (
        <div className='w-full h-full flex flex-col items-center justify-center p-20 pt-5'>
            <CustomersLineChart />
        </div>
    )
}

export default Customers