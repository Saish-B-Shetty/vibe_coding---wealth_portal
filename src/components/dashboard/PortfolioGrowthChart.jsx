import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import './PortfolioGrowthChart.css';

const PortfolioGrowthChart = () => {
    // Mock data simulating growth over time
    // Value starts around 1.5L and grows to ~1.8L
    const data = [
        { date: 'Sep', value: 1.59 },
        { date: 'Oct', value: 1.62 },
        { date: 'Nov', value: 1.55 },
        { date: 'Dec', value: 1.58 },
        { date: 'Jan', value: 1.52 },
        { date: 'Feb', value: 1.48 },
        { date: 'Mar', value: 1.42 },
        { date: 'Apr', value: 1.55 },
        { date: 'May', value: 1.60 },
        { date: 'Jun', value: 1.65 },
        { date: 'Jul', value: 1.62 },
        { date: 'Aug', value: 1.68 },
        { date: 'Sep', value: 1.74 },
        { date: 'Oct', value: 1.76 },
        { date: 'Nov', value: 1.78 },
        { date: 'Dec', value: 1.82 },
    ];

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p className="tooltip-date">{label}</p>
                    <p className="tooltip-value">₹{payload[0].value}L</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="chart-container-card">
            <div className="chart-header">
                <h3>Portfolio Performance</h3>
                <div className="chart-actions">
                    <button className="chart-filter active">1Y</button>
                    <button className="chart-filter">3Y</button>
                    <button className="chart-filter">5Y</button>
                    <button className="chart-filter">All</button>
                </div>
            </div>

            <div className="chart-wrapper">
                <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#387ed1" stopOpacity={0.1} />
                                <stop offset="95%" stopColor="#387ed1" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="3 3" />
                        <XAxis
                            dataKey="date"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#6b7280', fontSize: 12 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#6b7280', fontSize: 12 }}
                            domain={['dataMin - 0.1', 'dataMax + 0.1']}
                            tickFormatter={(value) => `${value}L`}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#387ed1"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#colorValue)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default PortfolioGrowthChart;
