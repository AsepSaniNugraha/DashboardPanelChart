import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TopProducts = () => {
    const dataBarChart = [
        { name: 'Laptop', sales: 382, color: "#030bfc" },
        { name: 'Tablet', sales: 330, color: "#fc9803" },
        { name: 'PC', sales: 289, color: "#0b7510" },
        { name: 'Modem', sales: 142, color: "#fc1303" },
        { name: 'Phone', sales: 105, color: "#f54263" }
    ];
    return (
        <div className='w-full h-full flex flex-col items-center justify-center'>
            <p className='text-3xl'>Top 5 Products</p>
            <div className='w-full h-full'>
                <ResponsiveContainer width='100%' height='100%'>
                    <BarChart data={dataBarChart}>
                        <Legend
                            content={() => (
                                <div className="flex justify-between gap-4 mt-2">
                                    {dataBarChart.map((item, index) => (
                                        <div key={index} className="flex items-center gap-1">
                                            <div className="w-3 h-3" style={{ backgroundColor: item.color }}></div>
                                            <span>{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                            )} />
                        <CartesianGrid strokeDasharray="3 3" stroke="#959695" />
                        <XAxis dataKey="name" />
                        {/* <Tooltip cursor={false} /> */}
                        <Bar
                            barSize={30}
                            dataKey="sales"
                            label={{ position: "top" }} >
                            {dataBarChart.map((entry, index) => (
                                <Cell key={index} fill={entry.color} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default TopProducts