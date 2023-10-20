import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
    {date: '2022-01-01', ballots: 100},
    {date: '2022-02-01', ballots: 370},
    {date: '2022-03-01', ballots: 520},
    {date: '2022-04-01', ballots: 1300},
];

const BallotGraph = () => (
    <LineChart
        width={1000}
        height={300}
        data={data}
        margin={{
            top: 25, right: 30, left: 20, bottom: 0,
        }}
    >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="ballots" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
);

export default BallotGraph;