import React, { useState, useMemo } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell,
    Legend
} from "recharts";
import dataProducts from '../../data/dataProducts.json';

const ProductChart = () => {

    const [sortType, setSortType] = useState("default");

    const sortedData = useMemo(() => {
        const data = [...dataProducts];

        switch (sortType) {
            case "sales-desc":
                return data.sort((a, b) => b.sales - a.sales);

            case "sales-asc":
                return data.sort((a, b) => a.sales - b.sales);

            case "stock-desc":
                return data.sort((a, b) => b.stock - a.stock);

            case "stock-asc":
                return data.sort((a, b) => a.stock - b.stock);

            default:
                return dataProducts; // original order
        }
    }, [sortType]);
    return (
        <div className='w-full h-full'>
            <p className='text-3xl py-2 text-center'>Products</p>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={sortedData}   // ✅ FIXED
                    barCategoryGap="20%"
                    barGap={0}
                    margin={{ top: 20, right: 20, left: 20, bottom: 120 }}
                >
                    <XAxis
                        dataKey="product"
                        angle={-90}
                        textAnchor="end"
                        height={80}
                        interval={0}
                    />
                    <YAxis />
                    <Tooltip cursor={false} />
                    <CartesianGrid />

                    {/* SALES (darker) */}
                    <Bar dataKey="sales">
                        {sortedData.map((entry, index) => (
                            <Cell
                                key={`sales-${index}`}
                                fill={entry.color}
                                style={{ opacity: 0.8 }} />
                        ))}
                    </Bar>

                    {/* STOCK (lighter) */}
                    <Bar dataKey="stock">
                        {sortedData.map((entry, index) => (
                            <Cell
                                key={`stock-${index}`}
                                fill={entry.color} />
                        ))}
                    </Bar>


                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ProductChart