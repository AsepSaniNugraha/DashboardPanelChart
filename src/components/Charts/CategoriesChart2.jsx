import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import dataCategory from '../../data/dataCategory.json'

const CategoriesChart2 = () => {

    return (
        <div className='w-full h-full flex flex-col'>
            <p className='text-xl'>
                Product by Categories
            </p>
            <div className='flex-1 min-h-0'>
                <ResponsiveContainer width="100%" height="100%">

                    <PieChart>
                        <Pie data={dataCategory} dataKey="product" nameKey="category" >
                            {dataCategory.map((entry, index) => (
                                <Cell key={index} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend
                            content={() => (
                                <div className="grid grid-cols-2 text-xs">
                                    {dataCategory.map((entry, index) => (
                                        <div key={index} className="flex items-center justify-start gap-1">
                                            <div className="w-3 h-3" style={{ backgroundColor: entry.color }} ></div>
                                            <span>{entry.category}</span>
                                        </div>
                                    ))}
                                </div>
                            )} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default CategoriesChart2