import React from 'react';
import dataReports from '../../data/dataReports.json';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
    Cell,
    Legend,
    LineChart,
    Line,
} from "recharts";

const ReportsPurchaseChart = () => {
    const transformedData = Object.values(
        dataReports.reduce((acc, item) => {
            const key = item.month;

            if (!acc[key]) {
                acc[key] = { month: key };
            }

            acc[key][`purchase${item.year}`] = item.purchase;

            return acc;
        }, {})
    );
    return (
        <div className='w-full h-full'>
            <p className='text-3xl py-2 text-center'>Purchase</p>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={transformedData} margin={{ top: 20, right: 20, left: 20, bottom: 120 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="purchase2024"
                        stroke="#8884d8"
                        strokeWidth={2}
                        dot={{ r: 4 }} />
                    <Line
                        type="monotone"
                        dataKey="purchase2025"
                        stroke="#82ca9d"
                        strokeWidth={2}
                        dot={(props) => {
                            const { cx, cy, payload } = props;

                            const isDecrease = payload.purchase2025 < payload.purchase2024;

                            return (
                                <circle
                                    cx={cx}
                                    cy={cy}
                                    r={5}
                                    fill={isDecrease ? "#e74c3c" : "#82ca9d"}
                                    stroke="white"
                                    strokeWidth={2} />
                            );
                        }} />
                </LineChart>
            </ResponsiveContainer>
            {/* <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    barGap={0}
                    data={transformedData}
                    margin={{ top: 20, right: 20, left: 20, bottom: 120 }} >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />

                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip cursor={false} />
                    <Legend />
                    <Bar dataKey="sales2024" name="2024" fill="#8884d8" >
                        {transformedData.map((entry, index) => {
                            return (
                                <Cell
                                    key={index}
                                    fill="#8884d8" />
                            );
                        })}
                    </Bar>
                    <Bar dataKey="sales2025" name="2025" fill="#82ca9d">
                        {transformedData.map((entry, index) => {
                            const isDecrease = entry.sales2025 < entry.sales2024;

                            return (
                                <Cell
                                    key={index}
                                    fill={isDecrease ? "#e74c3c" : "#82ca9d"} />
                            );
                        })}
                    </Bar>
                </BarChart>
            </ResponsiveContainer> */}

        </div>
    )
}

export default ReportsPurchaseChart