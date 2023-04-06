import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const subject = [
    {
        name: 'Page A',
        math: 4000,
        physics: 2400,
        chemistry: 2400,
    },
    {
        name: 'Page B',
        math: 3000,
        physics: 1398,
        chemistry: 2210,
    },
    {
        name: 'Page C',
        math: 2000,
        physics: 9800,
        chemistry: 2290,
    },
    {
        name: 'Page D',
        math: 2780,
        physics: 3908,
        chemistry: 2000,
    },
    {
        name: 'Page E',
        math: 1890,
        physics: 4800,
        chemistry: 2181,
    },
    {
        name: 'Page F',
        math: 2390,
        physics: 3800,
        chemistry: 2500,
    },
    {
        name: 'Page G',
        math: 3490,
        physics: 4300,
        chemistry: 2100,
    },
];


const Chart = () => {
    return (
        // chart style property should be placed in the linechart tag
        <div>
            <h1 className='text-center text-4xl font-bold'>Straight line Chart</h1>

            <LineChart width={1300} height={400} data={subject}>
                <Line type="monotone" dataKey="math" stroke="#8884d8" />
                <Line type="monotone" dataKey="physics" stroke="#8884d8" />
                <Line type="monotone" dataKey="chemistry" stroke="#8884d8" />
                
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>


        </div>
    );
};

export default Chart;