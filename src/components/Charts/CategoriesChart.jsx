import React from 'react'
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import dataCategory from '../../data/dataCategory.json'

const CategoriesChart = () => {

    return (
        <div className='w-full h-full flex flex-col'>
            <p className='text-3xl'>
                Stock by Categories
            </p>
            <div className='flex-1 min-h-0'>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie data={dataCategory} dataKey="stock" nameKey="category" labelLine={false} label={({ cx, cy, midAngle, innerRadius, outerRadius, value }) => {
                            const RADIAN = Math.PI / 180;
                            const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                            const x = cx + radius * Math.cos(-midAngle * RADIAN);
                            const y = cy + radius * Math.sin(-midAngle * RADIAN);

                            return (
                                <text
                                    x={x}
                                    y={y}
                                    fill="white"
                                    textAnchor="middle"
                                    dominantBaseline="central"
                                    fontSize={15}
                                    fontWeight="bold" >
                                    {value}
                                </text>
                            );
                        }}>
                            {dataCategory.map((entry, index) => (
                                <Cell key={index} fill={entry.color} />
                            ))}
                        </Pie>
                        <Legend
                            content={() => (
                                <div className="grid grid-cols-4 gap-x-10">
                                    {dataCategory.map((entry, index) => (
                                        <div key={index} className="flex items-center justify-start gap-1">
                                            <div className="w-3 h-3" style={{ backgroundColor: entry.color }} ></div>
                                            <span>{entry.category}</span>
                                        </div>
                                    ))}
                                </div>
                            )} />
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default CategoriesChart;