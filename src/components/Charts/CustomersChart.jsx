import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const CustomersChart = () => {
    const dataCustomer = [
        { group: "Gen Z", total: 562, color: "#030bfc" },
        { group: "Millenial", total: 538, color: "#fc9803" },
        { group: "Gen X", total: 366, color: "#03fc3d" },
        { group: "BabyBoomers", total: 276, color: "#fc1303" },
    ];

    return (
        <div className='w-full h-full flex flex-col items-center justify-center'>
            <p className='text-3xl'>Our Customers</p>
            <div className='w-full h-full'>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={dataCustomer}
                            dataKey="total"
                            nameKey="group"
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={120}
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
                                        fontSize={14}
                                        fontWeight="bold" >
                                        {value}
                                    </text>
                                );
                            }} >
                            {dataCustomer.map((entry, index) => (
                                <Cell key={index} fill={entry.color} />
                            ))}
                        </Pie>
                        <Legend
                            content={() => (
                                <div className="flex justify-between gap-4 mt-2">
                                    {dataCustomer.map((item, index) => (
                                        <div key={index} className="flex items-center gap-1">
                                            <div className="w-3 h-3" style={{ backgroundColor: item.color }} ></div>
                                            <span>{item.group}</span>
                                        </div>
                                    ))}
                                </div>
                            )} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default CustomersChart