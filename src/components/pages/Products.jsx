import React, { useState, useMemo } from 'react';
import ProductChart from '../Charts/ProductChart';

const Products = () => {
    return (
        <div className='w-full h-full flex flex-col items-center justify-center'>
            <ProductChart />
        </div>
    )
}

export default Products