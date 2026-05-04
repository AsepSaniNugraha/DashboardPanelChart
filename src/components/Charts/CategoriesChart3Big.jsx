import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import dataCategory from '../../data/dataCategory.json'

const CategoriesChart3Big = () => {
    const totalStock = dataCategory.reduce((sum, item) => sum + item.stock, 0);

    const dataWithPercentage = dataCategory.map(item => ({
        ...item,
        totalStock
    }));

    return (
        <div className='w-full h-full flex flex-col'>
            <p className='text-xl'>
                Stock Percentage
            </p>
            <div className='flex-1 min-h-0'>
                <ResponsiveContainer width="100%" height="100%">

                    <PieChart isAnimationActive={false}>
                        <Pie
                            isAnimationActive={false}
                            data={dataWithPercentage}
                            dataKey="stock"
                            nameKey="category"
                            label={({ cx, cy, midAngle, innerRadius, outerRadius, value }) => {
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
                                        fontSize={12}
                                        fontWeight="bold"
                                    >
                                        {((value / totalStock) * 100).toFixed(1)}%
                                    </text>
                                );
                            }}
                            labelLine={false} >
                            {dataWithPercentage.map((entry, index) => (
                                <Cell key={index} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip
                            formatter={(value, name, props) => {
                                const percent = ((value / props.payload.totalStock) * 100).toFixed(1);
                                return [`${percent}%`, name];
                            }}
                        />
                        <Legend
                            content={() => (
                                <div className="grid grid-cols-2 text-xs">
                                    {dataWithPercentage.map((entry, index) => (
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

export default CategoriesChart3Big