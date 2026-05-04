import React from 'react';
import customers from '../../data/customers.json'
import { LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, Line, CartesianGrid } from 'recharts';

const CustomersLineChart = () => {
    return (
        <div className='w-full h-full'>
            <p className='text-3xl py-2 text-center'>Customers Time Series</p>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={customers}>
                    <XAxis dataKey="year" tickCount={7} />
                    <YAxis tickCount={10} />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Line type="monotone" dataKey="Gen Z" stroke="#8884d8" strokeWidth={3} dot={{ r: 3 }} activeDot={{ r: 6 }} />
                    <Line type="monotone" dataKey="Millenial" stroke="#82ca9d" strokeWidth={3} dot={{ r: 3 }} activeDot={{ r: 6 }} />
                    <Line type="monotone" dataKey="Gen X" stroke="#ffc658" strokeWidth={3} dot={{ r: 3 }} activeDot={{ r: 6 }} />
                    <Line type="monotone" dataKey="Baby Boomer" stroke="#ff7300" strokeWidth={3} dot={{ r: 3 }} activeDot={{ r: 6 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default CustomersLineChart