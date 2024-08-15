// src/components/PerformanceGraph.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jun 12', score: 40 },
  { name: 'Jun 20', score: 35 },
  { name: 'Jul 13', score: 56 },
  { name: 'Jul 20', score: 20 },
  { name: 'Jul 23', score: 95 },
];

const PerformanceGraph = () => (
  <div className="bg-white border rounded px-8 py-6 mb-10">
    <h2 className="text-xl font-medium mb-4 text-[#404660]">Recent Performance</h2>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="score" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default PerformanceGraph;
