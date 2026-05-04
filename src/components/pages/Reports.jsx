import React from 'react';
import { GiCargoCrane } from "react-icons/gi";
import ReportsSalesChart from '../Charts/ReportsSalesChart';
import ReportsPurchaseChart from '../Charts/ReportsPurcahseChart';

const Reports = () => {
    return (
        <div className='w-full h-full flex gap-5 items-center justify-center'>
            <ReportsSalesChart />
            <ReportsPurchaseChart />
        </div>
    )
}

export default Reports